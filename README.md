# I-BAD Badminton Shop

I-BAD Badminton Shop là website thương mại điện tử chuyên cung cấp các sản phẩm cầu lông chính hãng, bao gồm vợt, giày, trang phục, túi và phụ kiện từ các thương hiệu hàng đầu như Yonex, Victor, Li-Ning, Apacs, Mizuno.

Dự án được xây dựng hoàn toàn bằng HTML, CSS và JavaScript thuần, kết hợp Bootstrap 5, không sử dụng framework hay backend.

---

## Cấu trúc dự án

```
├── HTML/
│   ├── index.html              # Trang chủ
│   ├── categories.html         # Danh mục sản phẩm (lọc, sắp xếp)
│   ├── products-detail.html    # Chi tiết sản phẩm
│   ├── cart.html               # Giỏ hàng
│   ├── checkout.html           # Thanh toán (3 bước)
│   ├── account.html            # Đăng nhập / Đăng ký
│   └── contact.html            # Liên hệ
├── CSS/
│   └── style.css               # Stylesheet tùy chỉnh của dự án
├── JavaScript/
│   ├── products.js             # Cơ sở dữ liệu sản phẩm (mảng PRODUCTS)
│   ├── cart.js                 # Quản lý giỏ hàng (localStorage)
│   └── components.js           # Các hàm dùng chung (Navbar, Footer, Product Card)
└── IMG/
    └── logo1.png               # Logo thương hiệu
```

---

## Tính năng chính

**Trang chủ**
- Banner slider tự động chạy (Swiper.js)
- Hiển thị sản phẩm nổi bật theo từng danh mục thông qua hệ thống tab
- Hiển thị sản phẩm đang giảm giá

**Danh mục sản phẩm**
- Lọc sản phẩm theo danh mục và khoảng giá
- Sắp xếp theo giá tăng/giảm dần, mới nhất, đánh giá cao
- Chuyển đổi giữa chế độ xem lưới và danh sách

**Chi tiết sản phẩm**
- Hiển thị thông số kỹ thuật theo từng loại sản phẩm
- Chọn size, chọn số lượng trước khi thêm vào giỏ
- Hiển thị sản phẩm liên quan cùng danh mục

**Giỏ hàng**
- Tăng/giảm số lượng, xóa từng sản phẩm hoặc xóa toàn bộ
- Tự động tính phí vận chuyển (miễn phí khi đơn hàng từ 150.000đ)
- Gợi ý mua thêm để đạt ngưỡng freeship

**Thanh toán**
- Quy trình 3 bước: Thông tin người nhận, Phương thức vận chuyển, Phương thức thanh toán
- Hỗ trợ COD, chuyển khoản ngân hàng, MoMo, VNPay
- Xóa giỏ hàng và hiển thị màn hình xác nhận sau khi đặt hàng thành công

**Tài khoản**
- Giao diện đăng nhập và đăng ký trên cùng trang (chuyển đổi tab)
- Hiển thị/ẩn mật khẩu

**Liên hệ**
- Form gửi tin nhắn với validate realtime từng trường
- Cảnh báo khi rời trang nếu form chưa được gửi

---

## Cơ chế hoạt động

### Navbar và Footer dùng chung

Mỗi trang HTML khai báo hai thẻ giữ chỗ:

```html
<div id="navbar-placeholder"></div>
<div id="footer-placeholder"></div>
```

JavaScript gọi `renderNavbar()` và `renderFooter()` để chèn HTML vào, giúp tránh viết lại trên mỗi trang.

### Quản lý sản phẩm

Toàn bộ dữ liệu sản phẩm được lưu trong biến `PRODUCTS` tại `products.js`. Mỗi sản phẩm gồm các thuộc tính: `id`, `title`, `brand`, `price`, `originalPrice`, `category`, `cover`, `rating`, `reviews`, `isNew`, `isBestSeller`, `sizes`, `specs`.

Các trang lọc sản phẩm bằng `.filter()` và hiển thị bằng hàm `renderProductCard()`.

### Giỏ hàng

Đối tượng `Cart` trong `cart.js` quản lý toàn bộ logic giỏ hàng:

- `Cart.addItem(product)` — thêm sản phẩm, tự động tăng số lượng nếu đã tồn tại
- `Cart.removeItem(id)` — xóa sản phẩm theo id
- `Cart.updateQuantity(id, qty)` — cập nhật số lượng
- `Cart.getTotal()` — tính tổng tiền
- `Cart.clearCart()` — xóa toàn bộ

Dữ liệu được lưu vào `localStorage` với key `ibad_cart`, đảm bảo không mất khi tải lại trang.

### Điều hướng trang

Hàm `navigateTo(path)` và `navigateToProduct(productId)` trong `components.js` xử lý điều hướng tương thích với cả hai môi trường: mở file trực tiếp (`file://`) và triển khai trên server (Vercel).

---

## Cách chạy dự án

Mở file `HTML/index.html` bằng trình duyệt, hoặc sử dụng tiện ích **Live Server** trong Visual Studio Code để có tính năng tự động tải lại khi chỉnh sửa.

Dự án không yêu cầu cài đặt Node.js hay bất kỳ công cụ nào khác — đây là website tĩnh hoàn toàn.

---

## Triển khai

Dự án đã được cấu hình để triển khai trên Vercel thông qua file `vercel.json`. Tất cả các đường dẫn điều hướng được xử lý tự động phù hợp với môi trường production.

---

## Công nghệ sử dụng

| Thành phần | Công nghệ |
|---|---|
| Giao diện | HTML5, CSS3, JavaScript (ES6+) |
| CSS Framework | Bootstrap 5.3 |
| Bộ icon | Bootstrap Icons |
| Slider | Swiper.js 11 |
| Font chữ | Inter, Playfair Display (Google Fonts) |
| Lưu trữ dữ liệu | localStorage (phía trình duyệt) |
| Triển khai | Vercel |
