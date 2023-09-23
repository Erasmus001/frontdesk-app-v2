export type User = {
  readonly id: string | number
  credentials: {
    name: string
    role: "Admin" | "Receptionist"
    email: string
    password: string
  }
  isLoggedIn: boolean
}