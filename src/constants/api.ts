export enum AuthQueryList {
  signup = '/api/auth/signup',
  login = '/api/auth/login',
  user = '/api/auth/user',
  logout = '/api/auth/logout',
}

export const userQueryList = {
  user: () => '/api/users/user',
  updateAvatar: () => `/api/users/update-avatar`,
  updateUser: () => `/api/users/update-user`,
};

export enum PickerQueryList {
  pick = '/api/picker/pick',
}

export const EventQueryList = {
  allEvents: () => '/api/events',
  event: (eventId: string) => `/api/events/${eventId}`,
  eventUpdate: (eventId: string) => `/api/events/${eventId}`,
  eventDelete: (eventId: string) => `/api/events/${eventId}`,
};

export enum TryQueryList {
  tryEmail = '/api/try/email',
}
