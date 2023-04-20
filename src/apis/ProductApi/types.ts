// Generated by https://quicktype.io

export interface GetAllProductsParamsType {
  page?: number;
  size?: number;
  category?: string;
}

export interface GetAllProductsResponseType {
  status: number;
  message: string;
  data: GetAllProductsDataType;
}

export interface GetAllProductsDataType {
  total: number;
  result: GetAllProductsResultType[];
  totalPages: number;
  currentPage: number;
}

export interface GetAllProductsResultType {
  id: number;
  name: string;
  brand: Brand;
  category: Category;
  description: Description;
  price: number;
  rating: number;
  numOfReviews: number;
  countInStock: number;
  createdAt: string;
  updatedAt: string;
  images: Image[];
}

export enum Brand {
  Adidas = 'Adidas',
  Puma = 'Puma',
}

export enum Category {
  AoCoc = 'Ao coc',
  AoKhoac = 'Ao khoac',
  AoMUA = 'Ao mua',
}

export enum Description {
  ChatLuongTot = 'Chat luong tot',
  ChatLuongTotNhat = 'Chat luong tot nhat',
}

export interface Image {
  id: number;
  url: string;
  type: Type;
}

export enum Type {
  Image = 'image',
}

// Generated by https://quicktype.io

export interface CreateProductRequestType {
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  countInStock: number;
  imageUrls: string[];
}

// Generated by https://quicktype.io

export interface CreateProductResponseType {
  status: number;
  message: string;
  data: CreateProductDataType;
}

export interface CreateProductDataType {
  product: CreateProductProductType;
}

export interface CreateProductProductType {
  numOfReviews: number;
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  countInStock: number;
  updatedAt: string;
  createdAt: string;
  imageUrls: string[];
}

// Generated by https://quicktype.io

export interface GetProductByIDResponseType {
  status: number;
  message: string;
  data: GetProductByIDDataType;
}

export interface GetProductByIDDataType {
  product: GetProductByIDProductType;
  reviews: GetProductByIDReviewsType;
}

export interface GetProductByIDProductType {
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
  images: GetProductByIDImageType[];
}

export interface GetProductByIDImageType {
  id: number;
  productId: number;
  url: string;
  type: string;
}

export interface GetProductByIDReviewsType {
  total: number;
  result: any[];
  totalPages: number;
  currentPage: number;
}

// Generated by https://quicktype.io

export interface UpdateProductByIDResponseType {
  status: number;
  message: string;
  data: UpdateProductByIDDataType;
}

export interface UpdateProductByIDDataType {
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
}

// Generated by https://quicktype.io

export interface CreateReviewForProductRequestType {
  content: string;
  rating: number;
  productId: number;
}

// Generated by https://quicktype.io

export interface CreateReviewForProductResponseType {
  status: number;
  message: string;
  data: CreateReviewForProductDataType;
}

export interface CreateReviewForProductDataType {
  id: number;
  userId: number;
  productId: number;
  content: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  userReview: CreateReviewForProductUserReviewType;
}

export interface CreateReviewForProductUserReviewType {
  username: string;
  avatar: null;
}

// Generated by https://quicktype.io

export interface DeleteProductByIDResponseType {
  status: number;
  message: string;
  data: null;
}

// Generated by https://quicktype.io

export interface UpdateMediaByIDRequestType {
  url: string;
}

// Generated by https://quicktype.io

export interface UpdateMediaByIDResponseType {
  status: number;
  message: string;
  data: UpdateMediaByIDDataType;
}

export interface UpdateMediaByIDDataType {
  id: number;
  productId: number;
  url: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

// Generated by https://quicktype.io

export interface SearchProductResponseType {
  status: number;
  message: string;
  data: SearchProductDataType;
}

export interface SearchProductDataType {
  products: SearchProductProductsType;
}

export interface SearchProductProductsType {
  total: number;
  result: SearchProductResultType[];
  totalPages: number;
  currentPage: number;
}

export interface SearchProductResultType {
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
  images: SearchProductImageType[];
}

export interface SearchProductImageType {
  type: SearchProductType;
  url: string;
  id: number;
}

export enum SearchProductType {
  Image = 'image',
}

// Generated by https://quicktype.io

export interface GetAllCategoriesResponseType {
  status: number;
  message: string;
  data: string[];
}