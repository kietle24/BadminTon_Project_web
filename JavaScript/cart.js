// Cart: quản lý toàn bộ logic giỏ hàng, lưu dữ liệu vào localStorage
const Cart = {

  // Lấy danh sách sản phẩm trong giỏ từ localStorage
  getItems() {
    return JSON.parse(localStorage.getItem('ibad_cart') || '[]');
  },

  // Lưu danh sách sản phẩm vào localStorage
  saveItems(items) {
    localStorage.setItem('ibad_cart', JSON.stringify(items));
  },

  // Thêm sản phẩm vào giỏ — nếu đã có thì tăng số lượng, chưa có thì thêm mới
  addItem(product) {
    const items = this.getItems();
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ id: product.id, title: product.title, brand: product.brand, price: product.price, cover: product.cover, quantity: 1 });
    }
    this.saveItems(items);
    this.updateBadge();
    this.showToast(product.title);
  },

  // Xóa một sản phẩm khỏi giỏ theo id
  removeItem(id) {
    const items = this.getItems().filter(i => i.id !== id);
    this.saveItems(items);
    this.updateBadge();
  },

  // Cập nhật số lượng của một sản phẩm — nếu qty <= 0 thì xóa luôn
  updateQuantity(id, qty) {
    if (qty <= 0) { this.removeItem(id); return; }
    const items = this.getItems();
    const item = items.find(i => i.id === id);
    if (item) item.quantity = qty;
    this.saveItems(items);
    this.updateBadge();
  },

  // Xóa toàn bộ giỏ hàng (dùng sau khi đặt hàng thành công)
  clearCart() {
    localStorage.removeItem('ibad_cart');
    this.updateBadge();
  },

  // Tính tổng tiền của toàn bộ sản phẩm trong giỏ
  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price * i.quantity, 0);
  },

  // Đếm tổng số lượng sản phẩm trong giỏ (dùng cho badge Navbar)
  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.quantity, 0);
  },

  // Cập nhật số hiển thị trên icon giỏ hàng ở Navbar
  updateBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = this.getCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
  },

  // Hiện thông báo nhỏ (Toast) ở góc màn hình khi thêm sản phẩm thành công
  showToast(title) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cart-toast';
      toast.className = 'position-fixed bottom-0 end-0 m-3 toast align-items-center text-bg-success border-0';
      toast.setAttribute('role', 'alert');
      toast.innerHTML = `<div class="d-flex"><div class="toast-body" id="cart-toast-body"></div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;
      document.body.appendChild(toast);
    }
    document.getElementById('cart-toast-body').textContent = `"${title}" đã được thêm vào giỏ hàng!`;
    const bsToast = new bootstrap.Toast(toast, { delay: 2500 });
    bsToast.show();
  }
};

// Khi trang load xong, cập nhật badge ngay để hiển thị đúng số lượng từ localStorage
document.addEventListener('DOMContentLoaded', () => Cart.updateBadge());
