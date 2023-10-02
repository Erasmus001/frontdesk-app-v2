export type User = {
  readonly id: string | number;
  credentials: {
    name: string;
    role: "Admin" | "Receptionist";
    email: string;
    password: string;
  };
  isLoggedIn: boolean;
};

export type Receptionist = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role?: "Receptionist";
};

export type Role = "Admin" | "Receptionist";

export type organizationProp = {
  readonly id: string;
  organizationName: string;
  organizationEmail: string;
  role: Role;
};
