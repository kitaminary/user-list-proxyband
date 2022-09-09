/// <reference types='react-scripts' />

export interface State {
  usersFromServer: UserType[];
  userAlboums: AlboumType[];
  activeModal: boolean;
  postsFromServer: PostType[];
  loader: boolean
}

export interface UserType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface AlboumType {
  id: number;
  userId: number;
  title: string;
}

export interface PostType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
