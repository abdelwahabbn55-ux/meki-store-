import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// --- SUPABASE CONFIGURATION ---
// Replace these with your own Supabase project values
const SUPABASE_URL = 'https://wrnmoasijmodwodukfsn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_i5yDcAQIlqshD3wSeD0S0A_82vOUYSW';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- ELEMENTS ---
const loginForm = document.getElementById('login-form');
const adminLayout = document.getElementById('admin-layout');
const productList = document.getElementById('admin-product-list');
const addProductForm = document.getElementById('add-product-form');
const errorMsg = document.getElementById('error-msg');
const logoutBtn = document.getElementById('logout-btn');

// --- AUTH CHECK ---
async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();

    const isLoginPage = window.location.pathname.includes('login.html');
    const isAdminPage = window.location.pathname.includes('admin.html');

    if (session) {
        if (isLoginPage) window.location.href = 'admin.html';
        if (isAdminPage) {
            adminLayout.style.display = 'flex';
            fetchAdminProducts();
        }
    } else {
        if (isAdminPage) window.location.href = 'login.html';
    }
}

// --- LOGIN ---
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            errorMsg.style.display = 'block';
            errorMsg.textContent = error.message;
        } else {
            window.location.href = 'admin.html';
        }
    });
}

// --- LOGOUT ---
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        await supabase.auth.signOut();
        window.location.href = 'login.html';
    });
}

// --- PRODUCT CRUD ---
async function fetchAdminProducts() {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching products:', error);
        return;
    }

    document.getElementById('total-count').textContent = data.length;

    productList.innerHTML = data.map(p => `
        <tr>
            <td><img src="${p.image_url}" class="thumb"></td>
            <td>${p.name_ar}</td>
            <td>${p.price}</td>
            <td>
                <button class="btn btn-sm btn-danger delete-btn" data-id="${p.id}">حذف</button>
            </td>
        </tr>
    `).join('');

    // Attach delete listeners
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const id = btn.getAttribute('data-id');
            if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
                await deleteProduct(id);
            }
        });
    });
}

async function deleteProduct(id) {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) fetchAdminProducts();
}

// --- ADD PRODUCT ---
if (addProductForm) {
    addProductForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.disabled = true;
        btn.textContent = 'جاري الحفظ...';

        const file = document.getElementById('product-image').files[0];
        let imageUrl = '';

        if (file) {
            const fileName = `${Date.now()}_${file.name}`;
            const { data, error: uploadError } = await supabase.storage
                .from('products')
                .upload(fileName, file);

            if (uploadError) {
                alert('خطأ في رفع الصورة: ' + uploadError.message);
                btn.disabled = false;
                btn.textContent = 'حفظ المنتج';
                return;
            }

            const { data: { publicUrl } } = supabase.storage
                .from('products')
                .getPublicUrl(fileName);
            imageUrl = publicUrl;
        }

        const productData = {
            name_ar: document.getElementById('name_ar').value,
            name_fr: document.getElementById('name_fr').value,
            name_en: document.getElementById('name_en').value,
            price: document.getElementById('price').value,
            image_url: imageUrl
        };

        const { error } = await supabase.from('products').insert([productData]);

        if (error) {
            alert('خطأ في حفظ البيانات: ' + error.message);
        } else {
            document.getElementById('add-product-modal').classList.remove('active');
            addProductForm.reset();
            fetchAdminProducts();
        }

        btn.disabled = false;
        btn.textContent = 'حفظ المنتج';
    });
}

// --- MODAL LOGIC ---
const openModal = document.getElementById('open-add-modal');
const closeModal = document.getElementById('close-add-modal');
const modal = document.getElementById('add-product-modal');

if (openModal) openModal.onclick = () => modal.classList.add('active');
if (closeModal) closeModal.onclick = () => modal.classList.remove('active');

// --- INIT ---
checkAuth();
