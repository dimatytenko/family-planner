export interface User {
  id?: number;
  username?: string;
  email?: string;
}

export interface Session {
  sessionToken: string;
  user: User;
}
