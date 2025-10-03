export interface ProductDto {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  isAvailable: boolean;
}
export interface CreateProductDto {
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  isAvailable: boolean;
}
export interface UpdateProductDto {
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  isAvailable: boolean;
}
export interface ProductQueryDto {
  search?: string;
  filterByCategory?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  skipCount?: number;
  maxResultCount?: number;
}
export interface PagedResultDto<T> {
  items: T[];
  totalCount: number;
}
