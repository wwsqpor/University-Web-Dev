import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { Product } from '../../models/product.model';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  const mockProduct: Product = {
    id: 1,
    name: 'Test Product',
    description: 'Test description',
    price: 10000,
    rating: 4.5,
    image: 'test.jpg',
    images: ['test1.jpg', 'test2.jpg', 'test3.jpg'],
    link: 'https://kaspi.kz/test'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.product-name')?.textContent).toContain('Test Product');
  });

  it('should navigate through images', () => {
    expect(component.currentImageIndex).toBe(0);
    component.nextImage();
    expect(component.currentImageIndex).toBe(1);
    component.previousImage();
    expect(component.currentImageIndex).toBe(0);
  });
});
