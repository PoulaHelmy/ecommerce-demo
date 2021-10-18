export interface ProductModel {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: Rating;
}

export interface ProductPayload {
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
}

export interface simpleProducts {
  quantity: number;
  productId: number;
}


export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate: number;
  count: number;
}
