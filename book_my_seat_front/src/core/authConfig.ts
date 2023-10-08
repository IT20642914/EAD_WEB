import { APP_CONFIGS } from "../utilities/constants";

export const BookMySeatConfig = {
  auth: {
    clientId: APP_CONFIGS.CLIENT_ID,
    authority: APP_CONFIGS.AUTHORITY,
    redirectUri: APP_CONFIGS.REDIRECT_URL
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: false
  }
}

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: APP_CONFIGS.APP_SCOPES
}