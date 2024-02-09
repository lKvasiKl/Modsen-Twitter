enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export enum Theme {
  Light = "light",
  Dark = "dark",
}

export interface User {
  id?: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: Date | string;
  photo?: string;
  gender?: Gender;
}
