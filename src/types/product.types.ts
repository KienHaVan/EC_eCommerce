export interface ProductType {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  numOfReviews: number;
  countInStock: number;
  createdAt: string;
  updatedAt: string;
  images: ProductImageType[];
}

export interface ProductImageType {
  id: number;
  productId: number;
  url: string;
  type: string;
}

export interface ReviewType {
  total: number;
  result: string[];
  totalPages: number;
  currentPage: number;
}
