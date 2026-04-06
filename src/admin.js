import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// --- SUPABASE CONFIGURATION ---
const SUPABASE_URL = 'https://wrnmoasijmodwodukfsn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_i5yDcAQIlqshD3wSeD0S0A_82vOUYSW';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- GLOBAL STATE ---
let allProducts = [];
let allCategories = [];
let allOrders = [];
let currentLang = localStorage.getItem('makki_lang') || 'ar';

// --- ELEMENTS ---
const adminLayout = document.getElementById('admin-layout');
const logoutBtn = document.getElementById('logout-btn');
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

// --- AUTH CHECK ---
async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    const isLoginPage = window.location.pathname.includes('login.html');
    const isAdminPage = window.location.pathname.includes('admin.html');

    if (session) {
        if (isLoginPage) window.location.href = 'admin.html';
        if (isAdminPage && adminLayout) {
            adminLayout.style.display = ''; // Let CSS handle 'grid' vs 'block' responsiveness
            initDashboard();
        }
    } else {
        if (isAdminPage) window.location.href = 'login.html';
    }
}

// --- NAVIGATION ---
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (item.id === 'logout-btn') return;
        
        const sectionId = item.getAttribute('data-section');
        
        // Update Nav UI
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        // Update Section UI
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(`${sectionId}-section`).classList.add('active');
        
        // Load Data for Section
        loadSectionData(sectionId);
    });
});

function loadSectionData(sectionId) {
    switch(sectionId) {
        case 'dashboard': loadDashboardStats(); break;
        case 'products': loadAdminProducts(); break;
        case 'categories': loadAdminCategories(); break;
        case 'orders': loadAdminOrders(); break;
    }
}

// --- DASHBOARD ---
async function initDashboard() {
    updateDashboardHeader();
    loadDashboardStats();
    loadCategoriesForSelect(); // Preload for product modal
}

function updateDashboardHeader() {
    const dateEl = document.getElementById('current-date');
    if (dateEl) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateEl.innerHTML = `
            <span style="color: #fff; font-weight: 600;">${now.toLocaleDateString('ar-DZ', options)}</span>
            <span style="font-size: 0.8rem;">${now.toLocaleTimeString('ar-DZ', { hour: '2-digit', minute: '2-digit' })}</span>
        `;
    }
}

async function loadDashboardStats() {
    const { count: pCount } = await supabase.from('products').select('*', { count: 'exact', head: true });
    const { count: cCount } = await supabase.from('categories').select('*', { count: 'exact', head: true });
    const { data: orders, count: oCount } = await supabase.from('orders').select('*', { count: 'exact' }).order('created_at', { ascending: false }).limit(5);

    document.getElementById('stat-products-count').textContent = pCount || 0;
    document.getElementById('stat-categories-count').textContent = cCount || 0;
    document.getElementById('stat-orders-count').textContent = oCount || 0;

    renderRecentOrders(orders || []);
}

function renderRecentOrders(orders) {
    const list = document.getElementById('recent-orders-list');
    list.innerHTML = orders.map(o => `
        <tr>
            <td>#${o.id}</td>
            <td>${o.customer_name}</td>
            <td>${o.wilaya}</td>
            <td>${parseFloat(o.total_price).toLocaleString()} DZD</td>
            <td><span class="badge badge-${o.status.toLowerCase()}">${o.status}</span></td>
            <td>${new Date(o.created_at).toLocaleDateString('ar-DZ')}</td>
        </tr>
    `).join('');
}

// --- PRODUCT MANAGEMENT ---
const productList = document.getElementById('admin-product-list');
const productSearch = document.getElementById('product-search');
const categoryFilter = document.getElementById('product-category-filter');

async function loadAdminProducts() {
    const { data, error } = await supabase
        .from('products')
        .select('*, categories(name_ar)')
        .order('created_at', { ascending: false });

    if (error) return console.error(error);
    allProducts = data;
    renderProducts(allProducts);
}

function renderProducts(products) {
    productList.innerHTML = products.map(p => `
        <tr>
            <td><img src="${p.image_url}" class="product-thumb"></td>
            <td>${p.name_ar}</td>
            <td>${p.categories ? p.categories.name_ar : '—'}</td>
            <td>${p.price} DZD</td>
            <td>
                <div class="action-btns">
                    <button class="btn-icon edit-product" data-id="${p.id}"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon delete delete-product" data-id="${p.id}"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>
    `).join('');
    
    // Attach listeners
    document.querySelectorAll('.delete-product').forEach(btn => {
        btn.onclick = () => deleteProduct(btn.dataset.id);
    });
    document.querySelectorAll('.edit-product').forEach(btn => {
        btn.onclick = () => openProductModal(btn.dataset.id);
    });
}

// Search & Filter
productSearch?.addEventListener('input', filterProducts);
categoryFilter?.addEventListener('change', filterProducts);

function filterProducts() {
    const query = productSearch.value.toLowerCase();
    const catId = categoryFilter.value;
    
    const filtered = allProducts.filter(p => {
        const matchesSearch = p.name_ar.toLowerCase().includes(query) || p.name_en.toLowerCase().includes(query);
        const matchesCat = catId === 'all' || p.category_id == catId;
        return matchesSearch && matchesCat;
    });
    renderProducts(filtered);
}

// Product Modal
const productModal = document.getElementById('product-modal');
const productForm = document.getElementById('product-form');

if (document.getElementById('open-add-product-modal')) document.getElementById('open-add-product-modal').onclick = () => openProductModal();
if (document.getElementById('close-product-modal')) document.getElementById('close-product-modal').onclick = () => productModal.classList.remove('active');

async function openProductModal(id = null) {
    productForm.reset();
    document.getElementById('edit-product-id').value = id || '';
    document.getElementById('product-modal-title').textContent = id ? 'تعديل المنتج' : 'إضافة منتج جديد';
    
    if (id) {
        const p = allProducts.find(x => x.id == id);
        document.getElementById('p-name-ar').value = p.name_ar;
        document.getElementById('p-name-fr').value = p.name_fr;
        document.getElementById('p-name-en').value = p.name_en;
        document.getElementById('p-price').value = p.price;
        document.getElementById('p-category').value = p.category_id || '';
        document.getElementById('p-desc-ar').value = p.desc_ar || '';
    }
    
    productModal.classList.add('active');
}

if (productForm) productForm.onsubmit = async (e) => {
    e.preventDefault();
    const btn = productForm.querySelector('button[type="submit"]');
    btn.disabled = true;
    
    const id = document.getElementById('edit-product-id').value;
    const file = document.getElementById('p-image').files[0];
    let imageUrl = id ? allProducts.find(x => x.id == id).image_url : '';

    if (file) {
        const fileName = `${Date.now()}_${file.name}`;
        const { error: uploadError } = await supabase.storage.from('products').upload(fileName, file);
        if (!uploadError) {
            const { data: { publicUrl } } = supabase.storage.from('products').getPublicUrl(fileName);
            imageUrl = publicUrl;
        }
    }

    const pData = {
        name_ar: document.getElementById('p-name-ar').value,
        name_fr: document.getElementById('p-name-fr').value,
        name_en: document.getElementById('p-name-en').value,
        price: document.getElementById('p-price').value,
        category_id: document.getElementById('p-category').value || null,
        desc_ar: document.getElementById('p-desc-ar').value,
        image_url: imageUrl
    };

    const { error } = id 
        ? await supabase.from('products').update(pData).eq('id', id)
        : await supabase.from('products').insert([pData]);

    if (!error) {
        productModal.classList.remove('active');
        loadAdminProducts();
        loadDashboardStats();
    } else {
        alert('خطأ أثناء الحفظ');
    }
    btn.disabled = false;
};

async function deleteProduct(id) {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
        await supabase.from('products').delete().eq('id', id);
        loadAdminProducts();
        loadDashboardStats();
    }
}

// --- CATEGORY MANAGEMENT ---
const categoryList = document.getElementById('admin-category-list');
const categoryModal = document.getElementById('category-modal');
const categoryForm = document.getElementById('category-form');

async function loadAdminCategories() {
    const { data, error } = await supabase.from('categories').select('*, products(id)');
    if (error) return;
    allCategories = data;
    renderCategories(allCategories);
}

// Category image fallbacks (same as storefront)
const ADMIN_CAT_FALLBACKS = [
    { keywords: ['أدوات', 'tool', 'outil'],      img: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80' },
    { keywords: ['تنظيف', 'clean', 'nettoyage'], img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80' },
    { keywords: ['أقفال', 'lock', 'serrure'],    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
    { keywords: ['منزل', 'home', 'maison'],      img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80' },
];

function getAdminCatFallback(c) {
    const combined = `${c.name_ar || ''} ${c.name_fr || ''} ${c.name_en || ''}`.toLowerCase();
    for (const entry of ADMIN_CAT_FALLBACKS) {
        if (entry.keywords.some(k => combined.includes(k))) return entry.img;
    }
    return ADMIN_CAT_FALLBACKS[3].img;
}

function renderCategories(cats) {
    categoryList.innerHTML = cats.map(c => {
        const imgSrc = c.image_url && c.image_url.trim() !== '' && c.image_url !== 'null'
            ? c.image_url
            : getAdminCatFallback(c);
        return `
        <tr>
            <td><img src="${imgSrc}" class="product-thumb cat-thumb" data-fallback="${getAdminCatFallback(c).replace(/&/g, '&amp;')}" style="object-fit: cover;"></td>
            <td>${c.name_ar}</td>
            <td>${c.name_fr}</td>
            <td>${c.name_en}</td>
            <td>${c.products ? c.products.length : 0} منتج</td>
            <td>
                <div class="action-btns">
                    <button class="btn-icon edit-cat" data-id="${c.id}"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon delete delete-cat" data-id="${c.id}"><i class="fas fa-trash"></i></button>
                </div>
            </td>
        </tr>`;
    }).join('');

    // Attach onerror via JS to safely handle & in URLs
    document.querySelectorAll('img.cat-thumb').forEach(img => {
        img.onerror = function() {
            this.onerror = null;
            this.src = this.dataset.fallback.replace(/&amp;/g, '&');
        };
    });

    document.querySelectorAll('.delete-cat').forEach(btn => {
        btn.onclick = () => deleteCategory(btn.dataset.id);
    });
    document.querySelectorAll('.edit-cat').forEach(btn => {
        btn.onclick = () => openCategoryModal(btn.dataset.id);
    });
}

if (document.getElementById('open-add-category-modal')) document.getElementById('open-add-category-modal').onclick = () => openCategoryModal();
if (document.getElementById('close-category-modal')) document.getElementById('close-category-modal').onclick = () => categoryModal.classList.remove('active');

function openCategoryModal(id = null) {
    categoryForm.reset();
    document.getElementById('edit-category-id').value = id || '';
    if (id) {
        const c = allCategories.find(x => x.id == id);
        document.getElementById('c-name-ar').value = c.name_ar;
        document.getElementById('c-name-fr').value = c.name_fr;
        document.getElementById('c-name-en').value = c.name_en;
    }
    categoryModal.classList.add('active');
}

if (categoryForm) categoryForm.onsubmit = async (e) => {
    e.preventDefault();
    const btn = categoryForm.querySelector('button[type="submit"]');
    btn.disabled = true;

    const id = document.getElementById('edit-category-id').value;
    const file = document.getElementById('c-image').files[0];
    let imageUrl = id ? allCategories.find(x => x.id == id).image_url : null;

    if (file) {
        const fileName = `cat_${Date.now()}_${file.name}`;
        const { error: uploadError } = await supabase.storage.from('products').upload(fileName, file);
        if (!uploadError) {
            const { data: { publicUrl } } = supabase.storage.from('products').getPublicUrl(fileName);
            imageUrl = publicUrl;
        }
    }

    const cData = {
        name_ar: document.getElementById('c-name-ar').value,
        name_fr: document.getElementById('c-name-fr').value,
        name_en: document.getElementById('c-name-en').value,
        image_url: imageUrl
    };
    
    const { error } = id 
        ? await supabase.from('categories').update(cData).eq('id', id)
        : await supabase.from('categories').insert([cData]);

    if (!error) {
        categoryModal.classList.remove('active');
        loadAdminCategories();
        loadCategoriesForSelect();
    } else {
        alert('حدث خطأ أثناء حفظ التصنيف');
    }
    btn.disabled = false;
};

async function deleteCategory(id) {
    if (confirm('حذف التصنيف لن يحذف المنتجات، بل سيزيل انتماءها له فقط. متابعة؟')) {
        await supabase.from('categories').delete().eq('id', id);
        loadAdminCategories();
        loadCategoriesForSelect();
    }
}

async function loadCategoriesForSelect() {
    const { data } = await supabase.from('categories').select('*');
    if (!data) return;
    
    const options = '<option value="">-- اختر التصنيف --</option>' + 
        data.map(c => `<option value="${c.id}">${c.name_ar}</option>`).join('');
    
    document.getElementById('p-category').innerHTML = options;
    document.getElementById('product-category-filter').innerHTML = '<option value="all">كل التصنيفات</option>' + options;
}

// --- ORDER MANAGEMENT ---
const orderList = document.getElementById('admin-order-list');
const orderDetailsModal = document.getElementById('order-details-modal');

async function loadAdminOrders() {
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    if (error) return;
    allOrders = data;
    renderOrders(allOrders);
}

function renderOrders(orders) {
    orderList.innerHTML = orders.map(o => `
        <tr>
            <td>#${o.id}</td>
            <td>${o.customer_name}</td>
            <td>${o.phone}</td>
            <td>${o.wilaya}</td>
            <td>${parseFloat(o.total_price).toLocaleString()} DZD</td>
            <td><span class="badge badge-${o.status.toLowerCase()}">${o.status}</span></td>
            <td>${new Date(o.created_at).toLocaleDateString('ar-DZ')}</td>
            <td>
                <div class="action-btns">
                    <button class="btn btn-sm view-order" data-id="${o.id}">
                        <i class="fas fa-eye"></i> تفاصيل
                    </button>
                    <button class="btn-icon delete delete-order" data-id="${o.id}" title="حذف الطلب">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
    
    document.querySelectorAll('.view-order').forEach(btn => {
        btn.onclick = () => openOrderDetails(btn.dataset.id);
    });

    document.querySelectorAll('.delete-order').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            deleteOrder(btn.dataset.id);
        };
    });
}

async function deleteOrder(id) {
    const confirmMsg = currentLang === 'ar' 
        ? 'هل أنت متأكد من حذف هذا الطلب نهائياً؟' 
        : 'Are you sure you want to permanently delete this order?';
        
    if (!confirm(confirmMsg)) return;

    try {
        // 1. Delete associated order items first to maintain integrity
        const { error: itemsError } = await supabase.from('order_items').delete().eq('order_id', id);
        if (itemsError) throw itemsError;
        
        // 2. Delete the order itself
        const { error: orderError } = await supabase.from('orders').delete().eq('id', id);
        if (orderError) throw orderError;

        // 3. Refresh list and stats
        await loadAdminOrders();
        await loadDashboardStats();
    } catch (err) {
        console.error('Error deleting order:', err);
        alert('Error: ' + err.message);
    }
}

async function openOrderDetails(id) {
    const order = allOrders.find(x => x.id == id);
    const { data: items } = await supabase
        .from('order_items')
        .select('*, products(name_ar, name_fr, name_en)')
        .eq('order_id', id);

    document.getElementById('view-order-id').textContent = order.id;
    document.getElementById('view-cust-name').textContent = order.customer_name;
    document.getElementById('view-cust-phone').textContent = order.phone;
    document.getElementById('view-cust-address').textContent = `${order.wilaya}، ${order.address}`;
    document.getElementById('view-delivery-info').textContent = order.delivery_company ? `${order.delivery_company.replace(/_/g, ' ')} (${order.delivery_type})` : 'N/A';
    document.getElementById('view-cust-notes').textContent = order.notes || 'لا يوجد';
    
    document.getElementById('view-order-subtotal').textContent = `${parseFloat(order.subtotal || 0).toLocaleString()} DZD`;
    document.getElementById('view-order-shipping').textContent = `${parseFloat(order.delivery_fee || 0).toLocaleString()} DZD`;
    document.getElementById('view-order-total').textContent = `${parseFloat(order.total_price).toLocaleString()} DZD`;
    
    document.getElementById('update-order-status').value = order.status;

    document.getElementById('view-order-items').innerHTML = items.map(item => `
        <div class="order-item-mini">
            <span>${item.products ? item.products.name_ar : 'منتج محذوف'} (x${item.quantity})</span>
            <span>${(item.price * item.quantity).toLocaleString()} DZD</span>
        </div>
    `).join('');

    // Status Update Listener
    document.getElementById('update-order-status').onchange = async (e) => {
        await supabase.from('orders').update({ status: e.target.value }).eq('id', id);
        loadAdminOrders();
        loadDashboardStats();
    };

    orderDetailsModal.classList.add('active');
}

if (document.getElementById('close-order-modal')) document.getElementById('close-order-modal').onclick = () => orderDetailsModal.classList.remove('active');

// --- LOGOUT ---
if (logoutBtn) {
    logoutBtn.onclick = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            window.location.href = 'login.html';
        } else {
            console.error('Logout error:', error);
            // Fallback: forcefully redirect
            window.location.href = 'login.html';
        }
    };
}

// --- LOGIN ---
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorMsg = document.getElementById('error-msg');
        const btn = loginForm.querySelector('button');

        btn.disabled = true;
        btn.textContent = 'جاري الدخول...';
        errorMsg.style.display = 'none';

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            errorMsg.style.display = 'block';
            btn.disabled = false;
            btn.textContent = 'دخول';
        } else {
            window.location.href = 'admin.html';
        }
    };
}

// --- INIT ---
checkAuth();
