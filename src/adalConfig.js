import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';
 
const appId = 'e2982088-acb0-4c80-abdf-ec9afbd6486b';
export const endpoint = `https://login.microsoftonline.com/` + appId + `/`;

export const adalConfig = {
  tenant: 'vnpoc2.onmicrosoft.com',
  clientId: appId,
  endpoints: {
    api: appId,
  },
  postLogoutRedirectUri: window.location.origin,
  cacheLocation: 'localStorage',
  //redirectUri: 'http://localhost:3000'
};
 
export const authContext = new AuthenticationContext(adalConfig);
 
export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
 
export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
 