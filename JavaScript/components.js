
function renderNavbar(activePage) {
  const isActive = (key) => activePage === key ? 'active-page' : '';
  const basePath = getBasePath();
  const homeLink = basePath === '.' ? './index.html' : '/HTML/index.html';
  const accountLink = basePath === '.' ? './account.html' : '/HTML/account.html';
  const cartLink = basePath === '.' ? './cart.html' : '/HTML/cart.html';
  const categoriesLink = basePath === '.' ? './categories.html' : '/HTML/categories.html';
  const contactLink = basePath === '.' ? './contact.html' : '/HTML/contact.html';

  document.getElementById('navbar-placeholder').innerHTML = `
    <header class="header">
      <!-- Top Info Bar -->
      <div class="top-info-bar" style="background:#fff; padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-size: 12px; color: #666;">
        <div class="container d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div class="d-flex gap-4">
            <span><i class="bi bi-telephone" style="color:#d95327; margin-right:5px;"></i>Hotline: <strong style="color:#d95327;">0968686868</strong></span>
            <span><i class="bi bi-geo-alt" style="color:#d95327; margin-right:5px;"></i>Hệ thống 80+ chi nhánh trên toàn quốc</span>
          </div>
        </div>
      </div>

      <!-- Main Header -->
      <nav class="main-header navbar navbar-expand-lg bg-white sticky-top" style="padding: 15px 0; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
        <div class="container-fluid px-3 px-lg-5">
          <div class="d-flex align-items-center justify-content-between w-100 gap-3 gap-lg-4">
            <!-- Logo -->
            <div class="flex-shrink-0">
              <a href="${homeLink}" class="navbar-brand d-inline-block text-decoration-none">
                <img src="../IMG/logo1.png" alt="I-BAD Badminton Shop" style="max-height: 50px; width: auto;">
              </a>
            </div>

            <!-- Search - Hidden on mobile -->
            <div class="flex-grow-1 d-none d-lg-block" style="min-width: 250px;">
              <form onsubmit="handleSearch(event)" style="display:flex;">
                <div class="input-group" style="width:100%;">
                  <input type="text" id="navbar-search" class="form-control" placeholder="Tìm kiếm sản phẩm, thương hiệu..." style="border-radius: 20px 0 0 20px; border: 1px solid #ddd; padding: 10px 15px; font-size:13px;">
                  <button type="submit" class="btn" style="border-radius: 0 20px 20px 0; border: 1px solid #ddd; background:#fff; color:#d95327; border-left:none;"><i class="bi bi-search"></i></button>
                </div>
              </form>
            </div>

            <!-- Right Actions -->
            <div class="d-flex justify-content-end gap-2 gap-lg-4 align-items-center flex-shrink-0">
              <a href="${accountLink}" class="text-dark text-decoration-none d-flex flex-column align-items-center" style="font-size:12px; gap:3px;">
                <i class="bi bi-person fs-5"></i> <span class="d-none d-lg-inline">Tài khoản</span>
              </a>
              <a href="${cartLink}" class="text-dark text-decoration-none d-flex flex-column align-items-center position-relative" style="font-size:12px; gap:3px;">
                <i class="bi bi-cart3 fs-5"></i>
                <span id="cart-badge" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size:10px; display:none;">0</span>
                <span class="d-none d-lg-inline">Giỏ hàng</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Menu Bar -->
      <nav class="menu-bar" style="background: #d95327; border-top: none;">
        <div class="container">
          <ul class="nav justify-content-center py-2 flex-wrap" style="gap: 0;">
            <li class="nav-item">
              <a class="nav-link text-white text-uppercase fw-bold px-3 py-2" href="${categoriesLink}?cat=Vợt+Cầu+Lông" style="font-size:13px; border-right: 1px solid rgba(255,255,255,0.2);">Vợt Cầu Lông</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-uppercase fw-bold px-3 py-2" href="${categoriesLink}?cat=Giày+Cầu+Lông" style="font-size:13px; border-right: 1px solid rgba(255,255,255,0.2);">Giày Cầu Lông</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-uppercase fw-bold px-3 py-2" href="${categoriesLink}?cat=Áo+Cầu+Lông" style="font-size:13px; border-right: 1px solid rgba(255,255,255,0.2);">Áo Cầu Lông</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-uppercase fw-bold px-3 py-2" href="${categoriesLink}?cat=Quần+Cầu+Lông" style="font-size:13px; border-right: 1px solid rgba(255,255,255,0.2);">Quần Cầu Lông</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-uppercase fw-bold px-3 py-2" href="${categoriesLink}?cat=Túi+Cầu+Lông" style="font-size:13px; border-right: 1px solid rgba(255,255,255,0.2);">Túi Cầu Lông</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-uppercase fw-bold px-3 py-2" href="${categoriesLink}?cat=Phụ+Kiện" style="font-size:13px; border-right: 1px solid rgba(255,255,255,0.2);">Phụ Kiện</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-uppercase fw-bold px-3 py-2" href="${contactLink}" style="font-size:13px;">Liên Hệ</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>`;
  Cart.updateBadge();
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="pt-5 mt-5 border-top">
      <div class="container">
        <div class="border-top py-4 text-center">
          <p class="mb-0 text-muted">&copy; 2026 I-BAD Badminton Shop. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>`;
}

function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('navbar-search').value.trim();
  if (q) {
    const basePath = getBasePath();
    const categoriesLink = basePath === '.' ? './categories.html' : '/HTML/categories.html';
    window.location.href = `${categoriesLink}?search=${encodeURIComponent(q)}`;
  }
}

// Global Add to Cart Handler - Available to all pages
function addToCartHandler(product) {
  try {
    if (!Cart || !Cart.addItem) {
      console.error('Cart object not initialized');
      alert('Lỗi: Chức năng giỏ hàng chưa sẵn sàng. Vui lòng tải lại trang.');
      return;
    }
    Cart.addItem(product);
    console.log('Product added to cart:', product);
  } catch (e) {
    console.error('Lỗi thêm vào giỏ hàng:', e);
    alert('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng!');
  }
}

// Format currency
function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(price);
}

// Star rating using Unicode (no Font Awesome needed)
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '';

  // Full stars (sao vàng đầy)
  for (let i = 0; i < fullStars; i++) {
    stars += '<span style="color:#ffc107; font-size:0.85rem;">★</span>';
  }

  // Half star (nửa sao vàng)
  if (hasHalfStar) {
    stars += '<span style="color:#ffc107; font-size:0.85rem;">⯨</span>';
  }

  // Empty stars (sao outline vàng)
  const totalStarsDisplayed = fullStars + (hasHalfStar ? 1 : 0);
  const emptyStars = 5 - totalStarsDisplayed;
  for (let i = 0; i < emptyStars; i++) {
    stars += '<span style="color:#ffc107; font-size:0.85rem;">☆</span>';
  }

  return stars;
}

// Helper function to get base path based on protocol
function getBasePath() {
  const isFileProtocol = window.location.protocol === 'file:';
  return isFileProtocol ? '.' : '';
}

// Helper function to navigate pages
function navigateTo(path) {
  const basePath = getBasePath();
  if (basePath === '.') {
    // File protocol: use relative paths
    window.location.href = './' + path.replace(/^\/HTML\//, '').replace(/^\//, '');
  } else {
    // Vercel/HTTP: use HTML paths
    const htmlPath = path.includes('.html') ? path : path + '.html';
    window.location.href = '/HTML/' + htmlPath.replace(/^\/HTML\//, '').replace(/^\//, '');
  }
}

// Helper function to navigate to product detail
function navigateToProduct(productId) {
  // Store in sessionStorage for fallback (works on file:// protocol)
  sessionStorage.setItem('viewProductId', productId);

  // Determine the correct URL based on current protocol
  const basePath = getBasePath();
  const detailUrl = basePath === '.'
    ? './products-detail.html?id=' + productId
    : '/HTML/products-detail.html?id=' + productId;

  window.location.href = detailUrl;
}

// Render a product card (reference b-card style with overlay tools)
function renderProductCard(product) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  const productData = { id: product.id, title: product.title, brand: product.brand, price: product.price, cover: product.cover };
  return `
    <div class="col">
      <a href="#" onclick="event.preventDefault(); navigateToProduct(${product.id})" class="text-decoration-none">
        <div class="card b-card" style="cursor:pointer;transition:transform 0.2s;height:100%">
          <div class="img-wrapper position-relative">
            <img src="${product.cover}" alt="${product.title}">
            ${product.isNew ? '<span class="badge bg-success" style="position:absolute; top:10px; left:10px;">MỚI</span>' : ''}
            ${product.isBestSeller ? '<span class="badge bg-danger" style="position:absolute; top:10px; right:10px;">BÁN CHẠY</span>' : ''}
            ${discount > 0 ? `<span class="badge bg-warning text-dark" style="position:absolute; top:10px; left:50%; transform:translateX(-50%);">-${discount}%</span>` : ''}
          </div>
          <div class="card-body text-center d-flex flex-column justify-content-between">
            <div>
              <small class="text-danger fw-bold">${product.brand}</small>
              <h6 class="fw-bold mt-2 mb-1" style="font-size:0.95rem">${product.title}</h6>
              <div class="text-warning mb-1" style="font-size:0.85rem;">
                ${renderStars(product.rating)} <strong>(${product.rating})</strong>
              </div>
              <div class="mt-3 mb-3">
                <div class="fw-bold text-danger" style="font-size:1.1rem">${formatPrice(product.price)}</div>
                ${product.originalPrice > product.price ? `<small class="text-muted text-decoration-line-through">${formatPrice(product.originalPrice)}</small>` : ''}
              </div>
            </div>
            <button type="button" class="btn btn-custom-primary w-100" onclick='event.preventDefault();event.stopPropagation();addToCartHandler(${JSON.stringify(productData).replace(/'/g, "&#39;")})' >
              <i class="bi bi-cart-plus"></i> Thêm vào giỏ
            </button>
          </div>
        </div>
      </a>
    </div>
  `;
}

// Alias for backwards compatibility
const renderBookCard = renderProductCard;
