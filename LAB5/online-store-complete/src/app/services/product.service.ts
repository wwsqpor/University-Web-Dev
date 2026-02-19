import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categories: Category[] = [
    {
      id: 1,
      name: 'Smartphones',
      icon: '📱',
      description: 'Latest flagship and mid-range smartphones'
    },
    {
      id: 2,
      name: 'Laptops',
      icon: '💻',
      description: 'Powerful laptops for work and gaming'
    },
    {
      id: 3,
      name: 'Headphones',
      icon: '🎧',
      description: 'Premium audio for every occasion'
    },
    {
      id: 4,
      name: 'Tablets',
      icon: '📲',
      description: 'Versatile tablets for productivity and entertainment'
    }
  ];

  private products: Product[] = [
    // ── SMARTPHONES (categoryId: 1) ──────────────────────────────────────────
    {
      id: 101,
      categoryId: 1,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'The ultimate Galaxy experience with built-in S Pen, 200MP camera, and Snapdragon 8 Gen 3 processor. Titanium frame with a 6.8-inch Dynamic AMOLED display running at 120Hz.',
      price: 599990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
      likes: 0
    },
    {
      id: 102,
      categoryId: 1,
      name: 'Apple iPhone 15 Pro Max',
      description: 'Apple\'s most powerful iPhone with A17 Pro chip, titanium design, and a 48MP Main camera system with 5x telephoto optical zoom. Features Action Button and USB-C connectivity.',
      price: 649990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p35/p4d/29468313.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/heb/86319874310174.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
      likes: 0
    },
    {
      id: 103,
      categoryId: 1,
      name: 'Xiaomi 14 Pro',
      description: 'Flagship from Xiaomi featuring Snapdragon 8 Gen 3, Leica-tuned triple camera with 1-inch main sensor, and HyperOS. A 6.73-inch AMOLED display with 3000 nits peak brightness.',
      price: 349990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/p81/67214865.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p99/45808873.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p81/p99/45808874.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-14-pro-12-512gb-titan-black-107310234/',
      likes: 0
    },
    {
      id: 104,
      categoryId: 1,
      name: 'Google Pixel 8 Pro',
      description: 'Google\'s flagship with Tensor G3 chip, advanced AI photography, and 7 years of OS updates guaranteed. Features a 6.7-inch LTPO OLED display and temperature sensor.',
      price: 429990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h85/hc5/63603038814238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/hd1/63603039338526.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141/?c=750000000',
      likes: 0
    },
    {
      id: 105,
      categoryId: 1,
      name: 'OnePlus 12',
      description: 'Powered by Snapdragon 8 Gen 3 with Hasselblad-tuned triple cameras and 100W SUPERVOOC fast charging. 6.82-inch LTPO AMOLED display, 4800mAh battery for all-day use.',
      price: 299990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pfe/90161872.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p63/pfe/90161874.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oneplus-nord-5-12-gb-512-gb-seryi-142846291/?c=750000000',
      likes: 0
    },

    // ── LAPTOPS (categoryId: 2) ───────────────────────────────────────────────
    {
      id: 201,
      categoryId: 2,
      name: 'Apple MacBook Pro 14" M3 Pro',
      description: 'The powerhouse MacBook with M3 Pro chip, stunning Liquid Retina XDR display, and up to 22 hours of battery life. Features a 11-core CPU and 14-core GPU for demanding creative workflows.',
      price: 899990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/p89/17666424.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p32/p89/17666424.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p92/pa0/17666425.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/h4f/84713104343070.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2u3ru-a-132088460/?c=750000000',
      likes: 0
    },
    {
      id: 202,
      categoryId: 2,
      name: 'ASUS ROG Zephyrus G16',
      description: 'Premium gaming laptop with Intel Core Ultra 9 CPU, NVIDIA RTX 4090 GPU, and a breathtaking 2.5K 240Hz OLED display. Slim chassis with powerful cooling and ROG Nebula HDR technology.',
      price: 1199990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2e/p89/47502192.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2e/p89/47502192.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p12/p89/47502193.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf6/p88/47502194.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-asus-rog-zephyrus-g16-16-32-gb-ssd-2000-gb-bez-os-90nr0lz5-m009d0-141048362/?c=750000000',
      likes: 0
    },
    {
      id: 203,
      categoryId: 2,
      name: 'Lenovo ThinkPad X1 Carbon Gen 12',
      description: 'Business ultrabook with Intel Core Ultra 7 processor, MIL-SPEC durability, and legendary ThinkPad keyboard. Weighing just 1.12kg with a 14-inch 2.8K OLED display.',
      price: 699990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hbe/86645269757982.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/hbe/86645269757982.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h72/hb3/86645269823518.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h81/86645269889054.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-12-14-16-gb-ssd-1000-gb-win-11-pro-21kc00c0rt-121905053/?c=750000000',
      likes: 0
    },
    {
      id: 204,
      categoryId: 2,
      name: 'Dell XPS 15 9530',
      description: 'Premium Dell laptop with 13th-gen Intel Core i9, NVIDIA RTX 4070, and a gorgeous 15.6-inch OLED 3.5K display. Combines sleek design with exceptional performance for creators.',
      price: 799990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h5e/85134389608478.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h08/h5e/85134389608478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/h81/85134389674014.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/hf2/85134389739550.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9530-15-6-32-gb-ssd-1000-gb-win-11-pro-210-bgmh-1-116529495/',
      likes: 0
    },
    {
      id: 205,
      categoryId: 2,
      name: 'HP Spectre x360 14',
      description: '2-in-1 laptop-tablet hybrid with 13th Gen Intel Evo Core i7, OLED display, and 360° hinge. Includes HP Tilt Pen for creative work and up to 17 hours battery life.',
      price: 549990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p01/17948532.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/p01/17948532.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p01/17948537.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc6/p01/17948542.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-16-aa0002ci-16-32-gb-ssd-1000-gb-win-11-home-a16kfea-132810607/?c=750000000',
      likes: 0
    },

    // ── HEADPHONES (categoryId: 3) ────────────────────────────────────────────
    {
      id: 301,
      categoryId: 3,
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise cancelling headphones with 8 microphones, Auto NC Optimizer, and 30-hour battery. Multipoint connection lets you pair to two devices simultaneously with seamless switching.',
      price: 159990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
      likes: 0
    },
    {
      id: 302,
      categoryId: 3,
      name: 'Apple AirPods Max',
      description: 'Over-ear headphones with high-fidelity audio, Active Noise Cancellation, Transparency mode, and Spatial Audio. Premium aluminum ear cups and a soft-breathable mesh canopy for lasting comfort.',
      price: 219990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000',
      likes: 0
    },
    {
      id: 303,
      categoryId: 3,
      name: 'Bose QuietComfort 45',
      description: 'Wireless Bluetooth headphones with world-class noise cancellation, TriPort acoustic architecture, and 24-hour battery life. Comfortable over-ear design perfect for long listening sessions.',
      price: 129990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/h7a/64374651715614.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=750000000',
      likes: 0
    },
    {
      id: 304,
      categoryId: 3,
      name: 'Sennheiser Momentum 4',
      description: 'Audiophile-grade wireless headphones with 60-hour battery, adaptive noise cancellation, and Sound Personalization app. Crystal clear call quality with a detachable cable option.',
      price: 119990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/hde/84609205698590.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/hde/84609205698590.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h48/85291511054366.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/h8d/85291511119902.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sennheiser-momentum-4-chernyi-114975824/?c=750000000',
      likes: 0
    },
    {
      id: 305,
      categoryId: 3,
      name: 'Jabra Evolve2 85',
      description: 'Professional wireless headset designed for office and remote work with outstanding ANC and 10-microphone call technology. 37-hour battery with quick charge delivers 80% in 60 minutes.',
      price: 149990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h66/ha0/64461905625118.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h66/ha0/64461905625118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h7d/64461907656734.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4d/h00/64461910147102.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jabra-evolve2-85-link380a-ms-stereo-chernyi-106496756/?c=750000000',
      likes: 0
    },

    // ── TABLETS (categoryId: 4) ───────────────────────────────────────────────
    {
      id: 401,
      categoryId: 4,
      name: 'Apple iPad Pro 13" M4',
      description: 'The most powerful iPad ever with M4 chip, Ultra Retina XDR OLED display, and Apple Pencil Pro support. Incredibly thin at 5.1mm and works with Apple Intelligence for AI-powered features.',
      price: 699990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/hbe/86056856879134.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h21/hbe/86056856879134.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc0/h3f/86056856944670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/ha8/86055676346398.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-13-2024-wi-fi-13-djuim-8-gb-256-gb-chernyi-119579567/?c=750000000',
      likes: 0
    },
    {
      id: 402,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S9 Ultra',
      description: 'Samsung\'s largest and most capable tablet with a 14.6-inch Dynamic AMOLED 2X display and Snapdragon 8 Gen 2. Includes S Pen in the box and features IP68 dust/water resistance.',
      price: 549990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb3/h78/82770436423710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hde/h76/82770436784158.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
      likes: 0
    },
    {
      id: 403,
      categoryId: 4,
      name: 'Xiaomi Pad 6 Pro',
      description: 'High-performance tablet with Snapdragon 8+ Gen 1, 12.4-inch 2.8K 144Hz display, and a quad-speaker system. Fast 67W charging and a 10,000mAh battery keeps you going all day.',
      price: 249990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/p0b/75463810.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p21/p0b/75463810.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/p0a/75463814.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/p07/75463821.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-pro-12-1-djuim-6-gb-128-gb-seryi-148868363/?c=750000000',
      likes: 0
    },
    {
      id: 404,
      categoryId: 4,
      name: 'Lenovo Tab P12 Pro',
      description: 'Premium productivity tablet with a 12.6-inch Super AMOLED 2K display, Snapdragon 870, and optional keyboard accessory. Dolby Vision and Atmos deliver cinema-quality entertainment.',
      price: 299990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5f/pda/22753460.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p5f/pda/22753460.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/pda/22753461.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/pda/22753462.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-idea-tab-pro-tb373fu-acc-12-7-djuim-8-gb-128-gb-seryi-134113438/?c=750000000',
      likes: 0
    },
    {
      id: 405,
      categoryId: 4,
      name: 'Apple iPad Air 11" M2',
      description: 'The versatile iPad Air powered by the M2 chip with Apple Intelligence support and compatibility with Apple Pencil Pro and the Magic Keyboard. A perfect balance of power and portability.',
      price: 449990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hdb/86223792013342.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/hdb/86223792013342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h3a/86223759474718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd7/hdb/86223759507486.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2024-wi-fi-11-djuim-8-gb-256-gb-seryi-120178607/?c=750000000',
      likes: 0
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}
