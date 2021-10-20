export interface SimpleUser {
  username: string;
  password: string;
  role: "USER" | "ADMIN";
}

export interface UserModel {
  username: string;
  firstName: string;
  roles: string[];
}

export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
  __v: number;
}

export interface AuthPayload {
  username: string;
  password: string;
}

export interface UserPayload {
  address: Address;
  email: string;
  username: string;
  password: string;
  name: Name;
  phone: string;
}

export interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

export interface Geolocation {
  lat: string;
  long: string;
}

export interface Name {
  firstname: string;
  lastname: string;
}
