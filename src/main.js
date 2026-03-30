const translations = {
    ar: {
        logo: "مكي ستور",
        nav_home: "الرئيسية",
        nav_categories: "الأصناف",
        nav_products: "المنتجات",
        nav_contact: "اتصل بنا",
        hero_title: "كل ما تحتاجه للمنزل في مكان واحد",
        hero_subtitle: "الجودة، الثقة، والاحترافية في خدمتكم. اكتشف تشكيلتنا الواسعة من الأدوات واللوازم المنزلية.",
        hero_btn_shop: "تصفح المنتجات",
        hero_btn_wa: "اطلب عبر واتساب",
        categories_title: "أصنافنا المختارة",
        all_categories: "كل الأصناف",
        products_title: "منتجات مختارة",
        order_wa: "اطلب عبر واتساب",
        why_quality: "جودة عالية",
        why_quality_desc: "نختار أفضل الماركات العالمية والمحلية.",
        why_price: "أسعار مناسبة",
        why_price_desc: "أفضل قيمة مقابل السعر في السوق.",
        why_delivery: "توصيل سريع",
        why_delivery_desc: "توصيل لباب المنزل في وقت قياسي.",
        why_trust: "خدمة موثوقة",
        why_trust_desc: "نحن هنا لمساعدتكم في أي وقت.",
        footer_desc: "وجهتكم الأولى لكل مستلزمات المنزل والخردوات في غليزان.",
        address: "غليزان، الجزائر",
        phone: "0550 74 32 86",
        whatsapp: "واتساب: +213 550 74 32 86",
        cart_title: "سلة المشتريات",
        cart_empty: "السلة فارغة",
        cart_total: "المجموع الكلي:",
        order_now: "اطلب الآن",
        form_title: "تأكيد الطلب",
        full_name: "الاسم الكامل",
        phone_label: "رقم الهاتف",
        wilaya: "الولاية",
        select_wilaya: "اختر الولاية",
        address_label: "العنوان الكامل",
        notes: "ملاحظات إضافية",
        confirm_order: "تأكيد الطلب وإرسال",
        add_to_cart: "إضافة للسلة",
        added: "تمت الإضافة!",
        success_title: "شكراً لك! تم استلام طلبك.",
        success_subtitle: "سيتم توجيهك الآن إلى واتساب لتأكيد الطلب مع الإدارة.",
        back_to_shop: "العودة للمتجر"
    },
    fr: {
        logo: "Makki Store",
        nav_home: "Accueil",
        nav_categories: "Catégories",
        nav_products: "Produits",
        nav_contact: "Contact",
        hero_title: "Tout pour la maison en un seul endroit",
        hero_subtitle: "Qualité, confiance et professionnalisme. Découvrez notre large gamme d'outils.",
        hero_btn_shop: "Voir les produits",
        hero_btn_wa: "WhatsApp",
        categories_title: "Nos Catégories",
        all_categories: "Toutes",
        products_title: "Produits Vedettes",
        order_wa: "Commander sur WhatsApp",
        why_quality: "Haute Qualité",
        why_quality_desc: "Les meilleures marques mondiales et locales.",
        why_price: "Prix Abordables",
        why_price_desc: "Le meilleur rapport qualité-prix.",
        why_delivery: "Livraison Rapide",
        why_delivery_desc: "Livraison à domicile record.",
        why_trust: "Service Fiable",
        why_trust_desc: "Nous sommes là pour vous aider.",
        footer_desc: "Votre destination numéro un à Relizane.",
        address: "Relizane, Algérie",
        phone: "0550 74 32 86",
        whatsapp: "WhatsApp: +213 550 74 32 86",
        cart_title: "Panier",
        cart_empty: "Le panier est vide",
        cart_total: "Total :",
        order_now: "Commander",
        form_title: "Confirmation",
        full_name: "Nom Complet",
        phone_label: "Téléphone",
        wilaya: "Wilaya",
        select_wilaya: "Sélectionnez Wilaya",
        address_label: "Adresse complète",
        notes: "Notes",
        confirm_order: "Confirmer la commande",
        add_to_cart: "Ajouter au panier",
        added: "Ajouté!",
        success_title: "Merci! Commande reçue.",
        success_subtitle: "Vous allez être redirigé vers WhatsApp pour confirmer.",
        back_to_shop: "Retour au magasin"
    },
    en: {
        logo: "Makki Store",
        nav_home: "Home",
        nav_categories: "Categories",
        nav_products: "Products",
        nav_contact: "Contact",
        hero_title: "Everything your home needs",
        hero_subtitle: "Quality, trust, and professionalism. Discover our wide range of tools.",
        hero_btn_shop: "Browse Products",
        hero_btn_wa: "WhatsApp",
        categories_title: "Categories",
        all_categories: "All",
        products_title: "Featured Products",
        order_wa: "Order on WhatsApp",
        why_quality: "High Quality",
        why_quality_desc: "Best global and local brands.",
        why_price: "Fair Prices",
        why_price_desc: "Best value for money.",
        why_delivery: "Fast Delivery",
        why_delivery_desc: "Home delivery in record time.",
        why_trust: "Reliable Service",
        why_trust_desc: "We are here to help anytime.",
        footer_desc: "Your number one destination in Relizane.",
        address: "Relizane, Algeria",
        phone: "0550 74 32 86",
        whatsapp: "WhatsApp: +213 550 74 32 86",
        cart_title: "Shopping Cart",
        cart_empty: "Your cart is empty",
        cart_total: "Total Amount:",
        order_now: "Check Out",
        form_title: "Order Details",
        full_name: "Full Name",
        phone_label: "Phone Number",
        wilaya: "Wilaya",
        select_wilaya: "Select Wilaya",
        address_label: "Full Address",
        notes: "Notes",
        confirm_order: "Confirm Order",
        add_to_cart: "Add to Cart",
        added: "Added!",
        success_title: "Thank you! Order received.",
        success_subtitle: "Redirecting to WhatsApp to confirm your order.",
        back_to_shop: "Back to Shop"
    }
};

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// --- SUPABASE CONFIGURATION ---
const SUPABASE_URL = 'https://wrnmoasijmodwodukfsn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_i5yDcAQIlqshD3wSeD0S0A_82vOUYSW';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- STATE ---
let products = [];
let categories = [];
let cart = JSON.parse(localStorage.getItem('makki_cart')) || [];
let currentLang = localStorage.getItem('makki_lang') || 'ar';
let selectedCategoryId = 'all';

// --- INITIALIZATION ---
async function init() {
    await fetchCategories();
    await fetchProducts();
    updateUI();
    updateCartUI();
    initReveal();
}

// --- DATA FETCHING ---
async function fetchCategories() {
    const { data, error } = await supabase.from('categories').select('*').order('name_ar');
    if (!error) {
        categories = data;
        renderCategoryFilter();
        renderMainCategories();
    }
}

async function fetchProducts() {
    let query = supabase.from('products').select('*').order('created_at', { ascending: false });
    
    if (selectedCategoryId !== 'all') {
        query = query.eq('category_id', selectedCategoryId);
    }
    
    const { data, error } = await query;
    if (!error) {
        products = data.map(p => ({
            id: p.id,
            name: { ar: p.name_ar, fr: p.name_fr, en: p.name_en },
            price: p.price,
            img: p.image_url,
            desc: { ar: p.desc_ar || '', fr: p.desc_fr || '', en: p.desc_en || '' },
            category_id: p.category_id
        }));
        renderProducts();
    }
}

// --- UI RENDERING ---
function renderCategoryFilter() {
    const bar = document.getElementById('category-filter-bar');
    if (!bar) return;

    const allText = translations[currentLang].all_categories;
    let html = `<div class="filter-pill ${selectedCategoryId === 'all' ? 'active' : ''}" data-id="all">${allText}</div>`;
    
    html += categories.map(c => `
        <div class="filter-pill ${selectedCategoryId == c.id ? 'active' : ''}" data-id="${c.id}">
            ${c[`name_${currentLang}`]}
        </div>
    `).join('');

    bar.innerHTML = html;

    // Attach listeners
    bar.querySelectorAll('.filter-pill').forEach(pill => {
        pill.onclick = () => {
            selectedCategoryId = pill.dataset.id;
            renderCategoryFilter(); // Update active state
            fetchProducts();
        };
    });
}

function renderMainCategories() {
    const grid = document.getElementById('main-category-grid');
    if (!grid) return;

    if (categories.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-muted); grid-column: 1/-1;">لا توجد أصناف حالياً</p>';
        return;
    }

    grid.innerHTML = categories.map(c => `
        <div class="category-card" data-reveal style="cursor: pointer;" onclick="document.querySelector('.filter-pill[data-id=\\'${c.id}\\']')?.click(); document.getElementById('products').scrollIntoView({behavior: 'smooth'})">
            <img src="${c.image_url || 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800'}" alt="${c[`name_${currentLang}`]}" loading="lazy">
            <div class="category-info">
                <h3>${c[`name_${currentLang}`]}</h3>
            </div>
        </div>
    `).join('');
    initReveal();
}

function renderProducts() {
    const list = document.getElementById('product-list');
    if (!list) return;

    list.innerHTML = products.map(p => `
        <div class="product-card" data-reveal>
            <img src="${p.img}" alt="${p.name[currentLang]}" class="product-img">
            <div class="product-info">
                <h3>${p.name[currentLang]}</h3>
                <p class="product-price">${parseFloat(p.price.replace(/[^0-9]/g, '')).toLocaleString()} DZD</p>
                <button class="btn btn-primary add-to-cart" data-id="${p.id}">
                    ${translations[currentLang].add_to_cart}
                </button>
            </div>
        </div>
    `).join('');
    initReveal();
}

function updateUI() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-btn').textContent = currentLang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update Input Placeholders
    const placeholders = {
        'cust-name': 'full_name',
        'cust-phone': 'phone_label',
        'cust-address': 'address_label',
        'cust-notes': 'notes'
    };
    for (let id in placeholders) {
        const el = document.getElementById(id);
        if (el) el.placeholder = translations[currentLang][placeholders[id]];
    }

    renderCategoryFilter();
    setupWilayaDropdown();
}

// --- CART LOGIC ---
function saveCart() {
    localStorage.setItem('makki_cart', JSON.stringify(cart));
    updateCartUI();
}

function addToCart(id) {
    const p = products.find(x => x.id == id);
    const existing = cart.find(x => x.id == id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...p, quantity: 1 });
    }
    saveCart();
    openCart();
}

function updateQuantity(id, delta) {
    const item = cart.find(x => x.id == id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) cart = cart.filter(x => x.id != id);
        saveCart();
    }
}

function updateCartUI() {
    const itemsEl = document.getElementById('cart-items');
    const countEl = document.getElementById('cart-count');
    const totalEl = document.getElementById('total-price');

    countEl.textContent = cart.reduce((s, i) => s + i.quantity, 0);

    if (cart.length === 0) {
        itemsEl.innerHTML = `<p class="empty-msg">${translations[currentLang].cart_empty}</p>`;
        totalEl.textContent = '0 DZD';
        return;
    }

    itemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.img}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${item.name[currentLang]}</h4>
                <p>${parseFloat(item.price.replace(/[^0-9]/g, '')).toLocaleString()} DZD</p>
            </div>
            <div class="cart-item-controls">
                <button onclick="window.updateQty(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="window.updateQty(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((s, i) => s + (parseInt(i.price.replace(/[^0-9]/g, '')) * i.quantity), 0);
    totalEl.textContent = total.toLocaleString() + ' DZD';
}

window.updateQty = updateQuantity;

function openCart() { document.getElementById('cart-sidebar').classList.add('active'); }
function closeCart() { 
    document.getElementById('cart-sidebar').classList.remove('active'); 
    document.getElementById('order-form-container').classList.remove('active');
}

// --- ORDER SUBMISSION ---
document.getElementById('order-form').onsubmit = async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.disabled = true;
    btn.textContent = '...';

    const orderData = {
        customer_name: document.getElementById('cust-name').value,
        phone: document.getElementById('cust-phone').value,
        wilaya: document.getElementById('cust-wilaya').value,
        address: document.getElementById('cust-address').value,
        notes: document.getElementById('cust-notes').value,
        total_price: cart.reduce((s, i) => s + (parseInt(i.price.replace(/[^0-9]/g, '')) * i.quantity), 0),
        status: 'Pending'
    };

    // 1. Insert Order
    const { data: order, error: oError } = await supabase.from('orders').insert([orderData]).select().single();
    
    if (oError) {
        alert("Error saving order: " + oError.message);
        btn.disabled = false;
        return;
    }

    // 2. Insert Items
    const itemsData = cart.map(item => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price: parseInt(item.price.replace(/[^0-9]/g, ''))
    }));

    await supabase.from('order_items').insert(itemsData);

    // 3. WhatsApp Redirect
    sendWhatsApp(orderData);

    // 4. Success UI
    showSuccess();
};

function sendWhatsApp(data) {
    let itemsText = cart.map(i => `- ${i.name[currentLang]} (x${i.quantity})`).join('\n');
    const msg = `🛒 *طلب جديد #${Date.now().toString().slice(-4)}*
--------------------------
${itemsText}
--------------------------
*المجموع:* ${data.total_price.toLocaleString()} DZD
--------------------------
👤 *الاسم:* ${data.customer_name}
📍 *الولاية:* ${data.wilaya}
🏠 *العنوان:* ${data.address}
📞 *الهاتف:* ${data.phone}
📝 *ملاحظات:* ${data.notes || 'لا يوجد'}`;

    window.open(`https://wa.me/213550743286?text=${encodeURIComponent(msg)}`, '_blank');
}

function showSuccess() {
    cart = [];
    saveCart();
    closeCart();
    document.getElementById('order-success-overlay').classList.add('active');
}

// --- WILAYA DROPDOWN (Enhanced) ---
const wilayas = [
    { id: "01", ar: "أدرار", fr: "Adrar", en: "Adrar" }, { id: "02", ar: "الشلف", fr: "Chlef", en: "Chlef" },
    { id: "03", ar: "الأغواط", fr: "Laghouat", en: "Laghouat" }, { id: "04", ar: "أم البواقي", fr: "Oum El Bouaghi", en: "Oum El Bouaghi" },
    { id: "05", ar: "باتنة", fr: "Batna", en: "Batna" }, { id: "06", ar: "بجاية", fr: "Béjaïa", en: "Béjaïa" },
    { id: "07", ar: "بسكرة", fr: "Biskra", en: "Biskra" }, { id: "08", ar: "بشار", fr: "Béchar", en: "Béchar" },
    { id: "09", ar: "البليدة", fr: "Blida", en: "Blida" }, { id: "10", ar: "البويرة", fr: "Bouira", en: "Bouira" },
    { id: "11", ar: "تمنراست", fr: "Tamanrasset", en: "Tamanrasset" }, { id: "12", ar: "تبسة", fr: "Tébessa", en: "Tébessa" },
    { id: "13", ar: "تلمسان", fr: "Tlemcen", en: "Tlemcen" }, { id: "14", ar: "تيارت", fr: "Tiaret", en: "Tiaret" },
    { id: "15", ar: "تيزي وزو", fr: "Tizi Ouzou", en: "Tizi Ouzou" }, { id: "16", ar: "الجزائر", fr: "Alger", en: "Algiers" },
    { id: "17", ar: "الجلفة", fr: "Djelfa", en: "Djelfa" }, { id: "18", ar: "جيجل", fr: "Jijel", en: "Jijel" },
    { id: "19", ar: "سطيف", fr: "Sétif", en: "Sétif" }, { id: "20", ar: "سعيدة", fr: "Saïda", en: "Saïda" },
    { id: "21", ar: "سكيكدة", fr: "Skikda", en: "Skikda" }, { id: "22", ar: "سيدي بلعباس", fr: "Sidi Bel Abbès", en: "Sidi Bel Abbès" },
    { id: "23", ar: "عنابة", fr: "Annaba", en: "Annaba" }, { id: "24", ar: "قالمة", fr: "Guelma", en: "Guelma" },
    { id: "25", ar: "قسنطينة", fr: "Constantine", en: "Constantine" }, { id: "26", ar: "المدية", fr: "Médéa", en: "Médéa" },
    { id: "27", ar: "مستغانم", fr: "Mostaganem", en: "Mostaganem" }, { id: "28", ar: "المسيلة", fr: "M'Sila", en: "M'Sila" },
    { id: "29", ar: "معسكر", fr: "Mascara", en: "Mascara" }, { id: "30", ar: "ورقلة", fr: "Ouargla", en: "Ouargla" },
    { id: "31", ar: "وهران", fr: "Oran", en: "Oran" }, { id: "32", ar: "البيض", fr: "El Bayadh", en: "El Bayadh" },
    { id: "33", ar: "إليزي", fr: "Illizi", en: "Illizi" }, { id: "34", ar: "برج بوعريريج", fr: "Bordj Bou Arreridj", en: "Bordj Bou Arreridj" },
    { id: "35", ar: "بومرداس", fr: "Boumerdès", en: "Boumerdès" }, { id: "36", ar: "الطارف", fr: "El Tarf", en: "El Tarf" },
    { id: "37", ar: "تندوف", fr: "Tindouf", en: "Tindouf" }, { id: "38", ar: "تيسمسيلت", fr: "Tissemsilt", en: "Tissemsilt" },
    { id: "39", ar: "الوادي", fr: "El Oued", en: "El Oued" }, { id: "40", ar: "خنشلة", fr: "Khenchela", en: "Khenchela" },
    { id: "41", ar: "سوق أهراس", fr: "Souk Ahras", en: "Souk Ahras" }, { id: "42", ar: "تيبازة", fr: "Tipaza", en: "Tipaza" },
    { id: "43", ar: "ميلة", fr: "Mila", en: "Mila" }, { id: "44", ar: "عين الدفلى", fr: "Aïn Defla", en: "Aïn Defla" },
    { id: "45", ar: "النعامة", fr: "Naâma", en: "Naâma" }, { id: "46", ar: "عين تموشنت", fr: "Aïn Témouchent", en: "Aïn Témouchent" },
    { id: "47", ar: "غرداية", fr: "Ghardaïa", en: "Ghardaïa" }, { id: "48", ar: "غليزان", fr: "Relizane", en: "Relizane" },
    { id: "49", ar: "تيميمون", fr: "Timimoun", en: "Timimoun" }, { id: "50", ar: "برج باجي مختار", fr: "Bordj Badji Mokhtar", en: "Bordj Badji Mokhtar" },
    { id: "51", ar: "أولاد جلال", fr: "Ouled Djellal", en: "Ouled Djellal" }, { id: "52", ar: "بني عباس", fr: "Béni Abbès", en: "Béni Abbès" },
    { id: "53", ar: "عين صالح", fr: "In Salah", en: "In Salah" }, { id: "54", ar: "عين قزام", fr: "In Guezzam", en: "In Guezzam" },
    { id: "55", ar: "تقرت", fr: "Touggourt", en: "Touggourt" }, { id: "56", ar: "جانت", fr: "Djanet", en: "Djanet" },
    { id: "57", ar: "المغير", fr: "El M'Ghair", en: "El M'Ghair" }, { id: "58", ar: "المنيعة", fr: "El Meniaa", en: "El Meniaa" }
];

function setupWilayaDropdown() {
    const options = document.getElementById('wilaya-options');
    if (!options) return;
    options.innerHTML = wilayas.map(w => `
        <div class="select-option" data-value="${w[currentLang]} (${w.id})">
            ${w[currentLang]} (${w.id})
        </div>
    `).join('');

    options.querySelectorAll('.select-option').forEach(opt => {
        opt.onclick = () => {
            document.getElementById('wilaya-trigger').querySelector('span').textContent = opt.dataset.value;
            document.getElementById('cust-wilaya').value = opt.dataset.value;
            document.getElementById('wilaya-select').classList.remove('active');
        };
    });
}

// --- EVENT LISTENERS ---
document.getElementById('wilaya-trigger')?.addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('wilaya-select').classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('#wilaya-select')) document.getElementById('wilaya-select')?.classList.remove('active');
    if (!e.target.closest('.lang-switcher')) document.getElementById('lang-menu')?.classList.remove('active');
});

document.getElementById('lang-btn')?.addEventListener('click', () => {
    document.getElementById('lang-menu').classList.toggle('active');
});

document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.onclick = () => {
        currentLang = btn.dataset.lang;
        localStorage.setItem('makki_lang', currentLang);
        updateUI();
    };
});

document.getElementById('cart-toggle')?.addEventListener('click', openCart);
document.getElementById('cart-close')?.addEventListener('click', closeCart);
document.getElementById('checkout-btn')?.addEventListener('click', () => cart.length && document.getElementById('order-form-container').classList.add('active'));
document.getElementById('back-to-cart')?.addEventListener('click', () => document.getElementById('order-form-container').classList.remove('active'));

document.addEventListener('click', e => {
    if (e.target.classList.contains('add-to-cart')) addToCart(e.target.dataset.id);
});

// Menu Toggle
document.getElementById('menu-toggle')?.addEventListener('click', () => {
    document.getElementById('menu-toggle').classList.toggle('active');
    document.getElementById('nav-links').classList.toggle('active');
});

// --- REVEAL ANIMATION ---
function initReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed'));
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// --- INIT ---
init();
