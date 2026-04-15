const Cart = {
  getItems() {
    return JSON.parse(localStorage.getItem('ibad_cart') || '[]');
  },
  saveItems(items) {
    localStorage.setItem('ibad_cart', JSON.stringify(items));
  },
  addItem(book) {
    const items = this.getItems();
    const existing = items.find(i => i.id === book.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ id: book.id, title: book.title, brand: book.brand, price: book.price, cover: book.cover, quantity: 1 });
    }
    this.saveItems(items);
    this.updateBadge();
    this.showToast(book.title);
  },
  removeItem(id) {
    const items = this.getItems().filter(i => i.id !== id);
    this.saveItems(items);
    this.updateBadge();
  },
  updateQuantity(id, qty) {
    if (qty <= 0) { this.removeItem(id); return; }
    const items = this.getItems();
    const item = items.find(i => i.id === id);
    if (item) item.quantity = qty;
    this.saveItems(items);
    this.updateBadge();
  },
  clearCart() {
    localStorage.removeItem('ibad_cart');
    this.updateBadge();
  },
  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price * i.quantity, 0);
  },
  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.quantity, 0);
  },
  updateBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
      const count = this.getCount();
      badge.textContent = count;
      badge.style.display = count > 0 ? 'inline-flex' : 'none';
    }
  },
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

// Init badge on page load
document.addEventListener('DOMContentLoaded', () => Cart.updateBadge());
