import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  currentImageIndex = 0;
  showShareMenu = false;

  get currentImage(): string {
    return this.product.images[this.currentImageIndex];
  }

  get stars(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  previousImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0 
      ? this.product.images.length - 1 
      : this.currentImageIndex - 1;
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  toggleShareMenu(): void {
    this.showShareMenu = !this.showShareMenu;
  }

  shareOnWhatsapp(): void {
    const message = `Check out this product on Kaspi: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    this.showShareMenu = false;
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
    this.showShareMenu = false;
  }
}
