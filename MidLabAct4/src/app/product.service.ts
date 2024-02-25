import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor() {}

  getProducts() {
    return [
      {
        prod_id: 'P-101',
        prod_name: 'Logitech Mouse',
        prod_desc: '6 Button Mechanical Mouse',
        prod_price: '899.00',
      },
      {
        prod_id: 'P-102',
        prod_name: 'JBL BT Speaker',
        prod_desc: 'Waterproof Radio 360 Surround',
        prod_price: '1,099.00',
      },
      {
        prod_id: 'P-103',
        prod_name: 'Mechanical KeyBoard',
        prod_desc: 'Hot-swappable RGB Backlit',
        prod_price: '2,395.00',
      },
      {
        prod_id: 'P-104',
        prod_name: 'Oculus Meta',
        prod_desc: 'All-in-one Gaming Headset',
        prod_price: '22,450.00',
      },
    ];
  }
}
