import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreateProductDto,
  PagedResultDto,
  ProductDto,
  ProductQueryDto,
  UpdateProductDto,
} from '../../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://localhost:44382';
  constructor(private http: HttpClient) {}

  //Get All Product
  GetAllProducts(
    query: ProductQueryDto
  ): Observable<PagedResultDto<ProductDto>> {
    let params = new HttpParams();
    Object.keys(query).forEach((key) => {
      if ((query as any)[key] !== undefined && (query as any)[key] !== null) {
        params = params.set(key, (query as any)[key]);
      }
    });
    return this.http.get<PagedResultDto<ProductDto>>(
      `${this.baseUrl}/api/Product/get-all-products`,
      { params }
    );
  }
  //Get product By Id
  GetProductById(id: string): Observable<ProductDto> {
    return this.http.get<ProductDto>(
      `${this.baseUrl}/api/Product/get-product-by-id/${id}`
    );
  }

  //create product
  createProduct(product: CreateProductDto): Observable<ProductDto> {
    return this.http.post<ProductDto>(
      `${this.baseUrl}/api/Product/create-product`,
      product
    );
  }
  //update
  updateProduct(id: string, product: UpdateProductDto): Observable<ProductDto> {
    return this.http.put<ProductDto>(
      `${this.baseUrl}/api/Product/update-product/${id}`,
      product
    );
  }
  //Delete
  deleteProduct(id: string): Observable<boolean> {
    return this.http.delete<boolean>(
      `${this.baseUrl}/api/Product/delete-product/${id}`
    );
  }
}
