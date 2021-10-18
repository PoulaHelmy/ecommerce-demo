import {simpleProducts} from "@core/data/interface/product.model";

export interface Cart {
  id: number;
  userId: number;
  date: string;
  __v?: number;
  products: simpleProducts[];
}

export interface CartPayload {
  userId: number;
  date: string;
  products: simpleProducts[];
}

