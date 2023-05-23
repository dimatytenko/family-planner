export enum AuthQueryList {
  signup = '/api/auth/signup',
  login = '/api/auth/login',
  user = '/api/auth/user',
  reverify = '/api/auth/verify',
  logout = '/api/auth/logout',
  forgotPassword = '/api/auth/forgot-password',
}

export const userQueryList = {
  user: () => '/api/users/user',
  updateAvatar: () => `/api/users/update-avatar`,
  updateUser: () => `/api/users/update-user`,
  resetPassword: () => `/api/users/reset-password`,
};

export enum PickerQueryList {
  pick = '/api/picker/pick',
}

export const EventQueryList = {
  allEvents: () => '/api/events',
  event: (eventId: string) => `/api/events/${eventId}`,
  eventUpdate: (eventId: string) => `/api/events/${eventId}`,
  eventDelete: (eventId: string) => `/api/events/${eventId}`,
  allDateEvents: () => '/api/events/event',
};

export enum TryQueryList {
  tryEmail = '/api/try/email',
}
