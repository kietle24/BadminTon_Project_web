# I-BAD Badminton Shop

Website thương mại điện tử bán đồ cầu lông — xây dựng bằng HTML, CSS, JavaScript thuần + Bootstrap.

---

## 📁 Cấu trúc

```
├── HTML/           # Các trang giao diện
├── CSS/            # Style (Bootstrap + style.css tùy chỉnh)
├── JavaScript/
│   ├── products.js     # Dữ liệu toàn bộ sản phẩm (mảng PRODUCTS)
│   ├── cart.js         # Logic giỏ hàng (lưu/đọc localStorage)
│   └── components.js   # Render Navbar, Footer, Product Card dùng chung
└── IMG/            # Hình ảnh
```

---

## ⚙️ Cách hoạt động

### 1. Navbar & Footer
Mỗi trang HTML có 2 thẻ giữ chỗ:
```html
<div id="navbar-placeholder"></div>
<div id="footer-placeholder"></div>
```
JavaScript gọi `renderNavbar()` và `renderFooter()` để chèn HTML vào — tránh viết lại mỗi trang.

### 2. Hiển thị sản phẩm
- Dữ liệu sản phẩm nằm trong biến `PRODUCTS` (file `products.js`).
- Các trang lọc sản phẩm bằng `.filter()` theo `category`, sau đó gọi `renderProductCard()` để hiển thị.

### 3. Giỏ hàng
- Bấm "Thêm vào giỏ" → `Cart.addItem()` được gọi.
- Giỏ hàng lưu vào `localStorage` (key: `ibad_cart`) → không mất khi tải lại trang.
- Badge số lượng trên Navbar tự cập nhật qua `Cart.updateBadge()`.

### 4. Trang chi tiết sản phẩm
- Nhận `id` từ URL parameter (`?id=17`).
- Tìm sản phẩm trong `PRODUCTS` và render chi tiết.

---

## 🚀 Chạy dự án

Mở file `HTML/index.html` bằng trình duyệt, hoặc dùng **Live Server** trong VSCode để có auto-reload.

> Không cần cài Node.js hay backend — đây là website tĩnh (static site).
