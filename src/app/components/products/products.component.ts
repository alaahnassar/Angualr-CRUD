import { products } from './../../models/products';
import { Iproduct } from './../../models/iproduct';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  searchTerm!: string;
  filteredProducts: any;
  pageSize = 7; // Number of items per page
  currentPage = 0; // Current page index
  totalProducts = 0; // Total number of products
  constructor(private productser: ProductsService) {
    // window.location.reload()
  }
  ngOnInit(): void {
    this.productser.getProducts().subscribe({
      next: (res: any) => {
        (this.products = res),
          this.performSearch(),
          (this.totalProducts = this.products.length);
        this.filterProducts();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  filterProducts(): void {
    const startIndex = this.currentPage * this.pageSize;
    this.filteredProducts = this.products.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }
  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.filterProducts(); // Reapply the filtering when the page changes
  }

  // remove product
  removeProductById(id: number) {
    this.productser.deleteProduct(id).subscribe({
      next: (value) => {
        this.products = this.products.filter(
          (product: any) => product.id != id
        );
        // this.products=value
      },
    });
    // const index=products.findIndex((obj)=>obj.id===id)
    // products.splice(index,1)
    // return products
  }
  // filter product
  performSearch(): void {
    if (this.searchTerm) {
      const searchTermLowerCase = this.searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter((obj: { name: string }) =>
        obj.name.toLowerCase().includes(searchTermLowerCase)
      );
    } else {
      this.filteredProducts = this.products.slice(); // Create a shallow copy of the products array
    }
  }
}
