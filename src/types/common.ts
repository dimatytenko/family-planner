export interface ILoading {
  page?: boolean;
  send?: boolean;
  delete?: boolean;
}

export enum ITEM_TYPES {
  EVENT = 'event',
  SPACE = 'space',
  TASK = 'task',
}
