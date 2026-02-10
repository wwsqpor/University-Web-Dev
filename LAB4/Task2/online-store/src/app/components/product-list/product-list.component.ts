import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro 128GB',
      description: 'The first iPhone with an aerospace‑grade titanium design. A17 Pro chip for next-level performance.',
      price: 545000,
      rating: 4.9,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/hcc/86302547869726.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/hcc/h01/86319878570014.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/hc3/h8a/86319878635550.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-belyi-113138220/?c=750000000'
    },
    {
      id: 2,
      name: 'Sony PlayStation 5 Slim',
      description: 'High-speed SSD for near-instant load times and an all-new slim design.',
      price: 260000,
      rating: 5.0,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 3,
      name: 'Dyson Airwrap Multi-styler',
      description: 'Styles hair using the Coanda effect, not extreme heat. Includes re-engineered attachments.',
      price: 285000,
      rating: 4.8,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p80/p6b/75454954.jpeg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/p55/p32/81442332.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/p71/p32/81442333.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-hs09-airwrap-co-anda2x-multi-styler-and-dryer-curly-coily-stailer-fioletovyi-148866022/?c=750000000'
    },
    {
      id: 4,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Galaxy AI is here. Epic camera with 200MP and built-in S Pen.',
      price: 520000,
      rating: 4.9,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000'
    },
    {
      id: 5,
      name: 'Apple MacBook Air 13 M2',
      description: 'Strikingly thin design with the powerful M2 chip. Up to 18 hours of battery life.',
      price: 480000,
      rating: 5.0,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    {
      id: 6,
      name: 'Marshall Emberton II',
      description: 'Compact portable speaker with the loud and vibrant sound only Marshall can deliver.',
      price: 85000,
      rating: 4.7,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h37/hf4/84709025349662.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h0e/h1e/84709025415198.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/he0/h90/84709025480734.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/marshall-stockwell-ii-black-and-brass-chernyi-zolotistyi-115302173/?c=750000000'
    },
    {
      id: 7,
      name: 'Xiaomi Mi Band 8',
      description: 'New running clip mode and somatosensory boxing sensation. Smooth 60Hz AMOLED screen.',
      price: 18000,
      rating: 4.9,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/h66/65114258571294.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/hdd/hb1/65114261323806.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h8e/he5/65114265976862.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000'
    },
    {
      id: 8,
      name: 'AirPods Pro 2 with USB-C',
      description: 'Active Noise Cancellation and Transparency mode. MagSafe Case with USB-C charging.',
      price: 115000,
      rating: 5.0,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/he4/h13/85730021834782.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h61/ha2/85730021900318.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000'
    },
    {
      id: 9,
      name: 'Nintendo Switch OLED',
      description: 'Vibrant 7-inch OLED screen, a wide adjustable stand, and wired LAN port.',
      price: 165000,
      rating: 4.9,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h9d/hf6/80832440533022.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h56/hbf/80832440664094.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=750000000'
    },
    {
      id: 10,
      name: 'Logitech G Pro X Superlight',
      description: 'Incredibly light and fast wireless gaming mouse designed with pro players.',
      price: 65000,
      rating: 4.8,
      image: '',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/hee/h38/84049616568350.png?format=gallery-medium',
               'https://resources.cdn-kaspi.kz/img/m/p/h22/h43/84049616633886.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=750000000'
    }
  ];
}
