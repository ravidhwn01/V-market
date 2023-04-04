export interface IUserSingUp {
  name: Name;
  email: string;
  password: string;
  confirm_password: string;
}

export interface Name {
  first_name: string;
  last_name: string;
}
