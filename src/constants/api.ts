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
  users: () => '/api/users',
  updateAvatar: () => `/api/users/update-avatar`,
  updateUser: () => `/api/users/update-user`,
  resetPassword: () => `/api/users/reset-password`,
  changeFirstLogin: () => `/api/users/change-first-login`,
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

export const SpaceQueryList = {
  createSpace: () => '/api/spaces/create',
  getSpace: (spaceId: string) => `/api/spaces/${spaceId}`,
  updateSpace: (spaceId: string) => `/api/spaces/${spaceId}`,
  deleteSpace: (spaceId: string) => `/api/spaces/${spaceId}`,
  getSpaces: () => '/api/spaces',
};

export const TaskQueryList = {
  createTask: (spaceId: string) => `/api/tasks/create/${spaceId}`,
  getTask: (taskId: string) => `/api/tasks/${taskId}`,
  deleteTask: (taskId: string) => `/api/tasks/${taskId}`,
  updateTask: (taskId: string) => `/api/tasks/${taskId}`,
  updateTaskStatus: (taskId: string) => `/api/tasks/${taskId}/status`,
  updateItemStatus: (taskId: string) => `/api/tasks/${taskId}/status-item`,
};

export enum TryQueryList {
  tryEmail = '/api/try/email',
}
