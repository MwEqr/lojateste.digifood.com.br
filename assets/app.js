// ===================== DADOS DOS PRODUTOS =====================
const PRODUCTS = [
  { id:1, name:'Fone Bluetooth Pro X1', category:'electronics', price:299.90, oldPrice:499.90, rating:4.9, reviews:1247, badge:'Mais Vendido', img:'assets/images/p1.png', desc:'Áudio imersivo com cancelamento de ruído ativo, bateria de 40h e design premium. Conectividade Bluetooth 5.3 com ultra baixa latência.'},
  { id:2, name:'Sneaker Luxe Edition', category:'fashion', price:589.90, oldPrice:890.00, rating:4.8, reviews:832, badge:'Novo', img:'assets/images/p2.png', desc:'Tênis de edição limitada com couro legítimo e solado de borracha premium. Design minimalista e elegante para qualquer ocasião.'},
  { id:3, name:'Kit Skincare Aurelia', category:'beauty', price:449.90, oldPrice:699.00, rating:4.9, reviews:2103, badge:'Top rated', img:'assets/images/p3.png', desc:'Set completo de cuidados faciais com sérum, tônico e creme. Fórmula com extrato de ouro 24k e ingredientes naturais.'},
  { id:4, name:'Smart Speaker Lumin', category:'home', price:399.90, oldPrice:599.00, rating:4.7, reviews:643, badge:'Oferta', img:'assets/images/p4.png', desc:'Alto-falante inteligente com som 360° e assistente virtual integrado. Design minimalista com iluminação LED personalizável.'},
  { id:5, name:'Câmera Mirrorless Z9', category:'electronics', price:3299.00, oldPrice:4500.00, rating:4.9, reviews:387, badge:'Premium', img:'assets/images/p1.png', desc:'Câmera profissional com sensor full-frame 45MP, gravação 8K e sistema de AF com IA. Para fotógrafos que não aceitam menos que perfeito.'},
  { id:6, name:'Perfume Noir Collection', category:'beauty', price:289.90, oldPrice:420.00, rating:4.8, reviews:1854, badge:'Exclusivo', img:'assets/images/p3.png', desc:'Fragrância oriental com notas de âmbar negro, sândalo e baunilha. Fixação de 12 a 14 horas. Garrafa em cristal lapidado.'},
  { id:7, name:'Jaqueta Reversível Rift', category:'fashion', price:429.00, oldPrice:650.00, rating:4.7, reviews:529, badge:'Novo', img:'assets/images/p2.png', desc:'Jaqueta reversível em nylon reciclado e veludo premium. Dois looks em um. Design contemporâneo com acabamento impecável.'},
  { id:8, name:'Caixa de Som Portátil', category:'home', price:199.90, oldPrice:329.00, rating:4.6, reviews:2341, badge:'Popular', img:'assets/images/p4.png', desc:'Som potente com 20W RMS e graves profundos. Resistente à água IPX7, bateria de 24h e alça integrada para aventuras.'},
];

// ===================== ESTADO =====================
let cart = JSON.parse(localStorage.getItem('nx_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('nx_wish') || '[]');
let currentFilter = 'all';
let currentSort = 'default';
let currentSearch = '';

// ===================== SPLASH SCREEN =====================
window.addEventListener('load', () => {
  createParticles();
  setTimeout(() => {
    document.getElementById('splash').classList.add('exit');
    setTimeout(() => { document.getElementById('splash').remove(); }, 800);
  }, 2400);
});

function createParticles() {
  const c = document.getElementById('particles');
  const colors = ['#7c3aed','#06b6d4','#ec4899','#f59e0b'];
  for(let i=0; i<30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random()*6+2;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;background:${colors[Math.floor(Math.random()*colors.length)]};opacity:${Math.random()*.6+.2};animation-delay:${Math.random()*4}s;animation-duration:${Math.random()*3+3}s`;
    c.appendChild(p);
  }
}

// ===================== TEMA =====================
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeToggle').querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('nx_theme', isDark ? 'light' : 'dark');
}

// Restaurar tema salvo
const savedTheme = localStorage.getItem('nx_theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  const icon = document.getElementById('themeToggle');
  if(icon) icon.querySelector('.theme-icon').textContent = savedTheme === 'light' ? '☀️' : '🌙';
}

// ===================== HEADER SCROLL =====================
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  if(window.scrollY > 60) h.style.boxShadow = '0 4px 30px rgba(0,0,0,.3)';
  else h.style.boxShadow = '';
});

// ===================== TIMER =====================
let timerEnd = new Date().getTime() + (8*3600+45*60+30)*1000;
function updateTimer() {
  const diff = timerEnd - new Date().getTime();
  if(diff < 0) { timerEnd = new Date().getTime() + 24*3600*1000; return; }
  const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
  document.getElementById('th').textContent = String(h).padStart(2,'0');
  document.getElementById('tm').textContent = String(m).padStart(2,'0');
  document.getElementById('ts').textContent = String(s).padStart(2,'0');
}
setInterval(updateTimer, 1000);

// ===================== RENDERIZAR PRODUTOS =====================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  let filtered = PRODUCTS.filter(p => {
    const matchCat = currentFilter === 'all' || p.category === currentFilter;
    const matchSearch = !currentSearch || p.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  if(currentSort === 'price-low') filtered.sort((a,b) => a.price - b.price);
  else if(currentSort === 'price-high') filtered.sort((a,b) => b.price - a.price);
  else if(currentSort === 'name') filtered.sort((a,b) => a.name.localeCompare(b.name));
  else if(currentSort === 'rating') filtered.sort((a,b) => b.rating - a.rating);

  document.getElementById('productCount').textContent = `${filtered.length} produto${filtered.length!==1?'s':''} encontrado${filtered.length!==1?'s':''}`;

  if(filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text2)"><div style="font-size:3rem">🔍</div><p>Nenhum produto encontrado</p></div>';
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const disc = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0;
    const inWish = wishlist.includes(p.id);
    return `
    <div class="product-card" id="pc-${p.id}">
      <div class="product-img-wrap" onclick="openModal(${p.id})">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <button class="wishlist-btn ${inWish?'active':''}" onclick="event.stopPropagation();toggleWishlistProduct(${p.id})" title="Favorito">♡</button>
      </div>
      <div class="product-info">
        <div class="product-category">${getCategoryLabel(p.category)}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <span class="stars-small">${'★'.repeat(Math.round(p.rating))}</span>
          <span class="rating-count">${p.rating} (${p.reviews.toLocaleString('pt-BR')})</span>
        </div>
        <div class="product-price-row">
          <span class="product-price">R$ ${p.price.toFixed(2).replace('.',',')}</span>
          ${p.oldPrice ? `<span class="product-price-old">R$ ${p.oldPrice.toFixed(2).replace('.',',')}</span>` : ''}
          ${disc > 0 ? `<span class="product-discount">-${disc}%</span>` : ''}
        </div>
        <button class="add-to-cart" onclick="addToCart(${p.id})">Adicionar ao Carrinho 🛒</button>
      </div>
    </div>`;
  }).join('');
}

function getCategoryLabel(cat) {
  const labels = { electronics:'Eletrônicos', fashion:'Moda', beauty:'Beleza', home:'Casa & Decoração', sports:'Esportes', books:'Livros' };
  return labels[cat] || cat;
}

// ===================== FILTROS E BUSCA =====================
function filterCategory(cat) {
  currentFilter = cat;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function searchProducts(val) {
  currentSearch = val;
  renderProducts();
}

function sortProducts(val) {
  currentSort = val;
  renderProducts();
}

// ===================== CARRINHO =====================
function toggleCart() {
  const d = document.getElementById('cartDrawer');
  const o = document.getElementById('cartOverlay');
  d.classList.toggle('open');
  o.classList.toggle('open');
}

function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const existing = cart.find(x => x.id === id);
  if(existing) existing.qty++;
  else cart.push({ id, qty: 1 });
  saveCart();
  updateCartUI();
  showToast(`✓ ${p.name} adicionado ao carrinho!`);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty < 1) { removeFromCart(id); return; }
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('nx_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const count = cart.reduce((a,b) => a + b.qty, 0);
  document.getElementById('cartCount').textContent = count;
  const total = cart.reduce((a,b) => { const p = PRODUCTS.find(x => x.id === b.id); return a + (p ? p.price*b.qty : 0); }, 0);
  document.getElementById('cartTotal').textContent = 'R$ ' + total.toFixed(2).replace('.',',');

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if(cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><div style="font-size:4rem">🛒</div><p>Seu carrinho está vazio</p><span>Adicione produtos para continuar</span></div>`;
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = 'block';
  itemsEl.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if(!p) return '';
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.name}">
      <div class="cart-item-info">
        <h4>${p.name}</h4>
        <div class="cart-item-price">R$ ${(p.price * item.qty).toFixed(2).replace('.',',')}</div>
        <div class="cart-item-actions">
          <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
          <button class="remove-btn" onclick="removeFromCart(${p.id})">✕ Remover</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ===================== WISHLIST =====================
function toggleWishlistProduct(id) {
  const idx = wishlist.indexOf(id);
  if(idx >= 0) wishlist.splice(idx, 1);
  else wishlist.push(id);
  localStorage.setItem('nx_wish', JSON.stringify(wishlist));
  document.getElementById('wishCount').textContent = wishlist.length;
  renderProducts();
}

function toggleWishlist() {
  showToast(`♡ ${wishlist.length} favorito${wishlist.length!==1?'s':''}`);
}

// ===================== MODAL =====================
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  const disc = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-img"><img src="${p.img}" alt="${p.name}"></div>
    <div class="modal-info">
      <div class="product-category">${getCategoryLabel(p.category)}</div>
      <h2>${p.name}</h2>
      <div class="product-rating">
        <span class="stars-small">${'★'.repeat(Math.round(p.rating))}</span>
        <span class="rating-count">${p.rating} · ${p.reviews.toLocaleString('pt-BR')} avaliações</span>
      </div>
      <div class="modal-price">R$ ${p.price.toFixed(2).replace('.',',')}</div>
      ${p.oldPrice ? `<div style="color:var(--text2);font-size:.9rem;margin-top:-12px;margin-bottom:8px">De <s>R$ ${p.oldPrice.toFixed(2).replace('.',',')}</s> — <span style="color:var(--green);font-weight:700">${disc}% OFF</span></div>` : ''}
      <p class="modal-desc">${p.desc}</p>
      <div class="modal-qty">
        <label>Quantidade:</label>
        <button class="qty-btn" onclick="document.getElementById('mq').value=Math.max(1,+document.getElementById('mq').value-1)">−</button>
        <input type="number" id="mq" value="1" min="1" style="width:50px;text-align:center;background:var(--surface);border:1px solid var(--border);color:var(--text);padding:6px;border-radius:8px">
        <button class="qty-btn" onclick="document.getElementById('mq').value=+document.getElementById('mq').value+1">+</button>
      </div>
      <button class="btn-primary" style="width:100%" onclick="addModalToCart(${p.id})">Adicionar ao Carrinho 🛒</button>
    </div>`;
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function addModalToCart(id) {
  const qty = parseInt(document.getElementById('mq').value) || 1;
  for(let i=0;i<qty;i++) addToCart(id);
  closeModal();
  setTimeout(toggleCart, 300);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ===================== TOAST =====================
let toastTimer;
function showToast(msg) {
  clearTimeout(toastTimer);
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ===================== NEWSLETTER =====================
function subscribeNewsletter(e) {
  e.preventDefault();
  showToast('🎉 Obrigado! Você está inscrito nas ofertas exclusivas.');
  e.target.reset();
}

// ===================== INIT =====================
renderProducts();
updateCartUI();
document.getElementById('wishCount').textContent = wishlist.length;
