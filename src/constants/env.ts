const {REACT_APP_SERVER_URL, REACT_APP_TELEGRAM_BOT_URL, REACT_APP_TELEGRAM_LOCAL_BOT_URL} = process.env;

const prodMod = process.env.NODE_ENV === 'production';
// export const SERVER_URL = prodMod ? REACT_APP_SERVER_URL : REACT_APP_SERVER_LOCAL_URL;
export const SERVER_URL = REACT_APP_SERVER_URL;

export const TELEGRAM_BOT_URL = prodMod ? REACT_APP_TELEGRAM_BOT_URL : REACT_APP_TELEGRAM_LOCAL_BOT_URL;
