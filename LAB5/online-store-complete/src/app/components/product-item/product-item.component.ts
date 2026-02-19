import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  activeImageIndex = 0;
  showShareMenu = false;
  showDeleteConfirm = false;
  isLiked = false;
  imageError = false;

  get starArray(): { filled: boolean }[] {
    return Array.from({ length: 5 }, (_, i) => ({
      filled: i < Math.round(this.product.rating)
    }));
  }

  get formattedPrice(): string {
    return this.product.price.toLocaleString('ru-KZ') + ' ₸';
  }

  selectImage(index: number): void {
    this.activeImageIndex = index;
    this.imageError = false;
  }

  onImageError(): void {
    this.imageError = true;
  }

  get currentImage(): string {
    if (this.imageError || !this.product.images?.[this.activeImageIndex]) {
      return `https://via.placeholder.com/400x300/1a1a2e/e94560?text=${encodeURIComponent(this.product.name.charAt(0))}`;
    }
    return this.product.images[this.activeImageIndex];
  }

  likeProduct(): void {
    this.product.likes++;
    this.isLiked = true;
    setTimeout(() => (this.isLiked = false), 300);
  }

  toggleShareMenu(): void {
    this.showShareMenu = !this.showShareMenu;
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product.name} - ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    this.showShareMenu = false;
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
    this.showShareMenu = false;
  }

  confirmDelete(): void {
    this.showDeleteConfirm = true;
  }

  cancelDelete(): void {
    this.showDeleteConfirm = false;
  }

  onDelete(): void {
    this.showDeleteConfirm = false;
    this.deleteProduct.emit(this.product.id);
  }

  openProduct(): void {
    window.open(this.product.link, '_blank');
  }
}
