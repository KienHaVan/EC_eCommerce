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
  result: ReviewResultType[];
  totalPages: number;
  currentPage: number;
}

export interface ReviewResultType {
  content: string;
  rating: number;
  createdAt: string;
  userReview: UserReviewType;
}

export interface UserReviewType {
  username: string;
  avatar: null;
}
