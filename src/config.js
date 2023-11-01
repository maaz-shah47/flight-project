export const config = {
  SERVER_URL: import.meta.env.VITE_APP_SERVER_URL,
  WEBSOCKET_URL: import.meta.env.VITE_APP_WEBSOCKET_URL,
};

console.log("SERVER_URL:", config.SERVER_URL);

export default config;
