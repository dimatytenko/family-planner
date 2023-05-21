declare global {
  interface Window {
    _env_: {
      REACT_APP_SERVER_URL: string | undefined;
    };
  }
}

export const SERVER_URL =
  typeof window !== 'undefined' && window._env_ ? window._env_.REACT_APP_SERVER_URL : process.env.REACT_APP_SERVER_URL;

// export const SERVER_URL = 'http://localhost:3030';
