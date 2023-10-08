import axios from 'axios'
import { exceptionHandler } from '../core'
import { APP_CONFIGS } from '../utilities/constants'

// import { InteractionRequiredAuthError } from '@azure/msal-browser'

axios.defaults.baseURL = "https://localhost:7282"
//  APP_CONFIGS.API_BASE

export const axiosPublicInstance = axios.create()
export const axiosPrivateInstance = axios.create()

// Request interceptor to manage authorization & headers
axiosPrivateInstance.interceptors.request.use(async (request: any) => {
  const msalRequest = {
    scopes: APP_CONFIGS.APP_SCOPES
  }
  const tokenResponse ={ accessToken:"token"}
//   await msalInstance.acquireTokenSilent(msalRequest)
    // .catch(error => {
    //   if (error instanceof InteractionRequiredAuthError) {
    //   // fallback to interaction when silent call fails
    //     return msalInstance.acquireTokenRedirect(msalRequest)
    //   }
    // })
  request.headers.Authorization = `Bearer ${tokenResponse?.accessToken}`

  return request
}, (error) => {
  console.log('Req interceptor Error', error)
})

// Response interceptor to manage responses & errors
axiosPrivateInstance.interceptors.response.use(async (response) => {
  return response
}, async (error) => {
  return Promise.reject(await exceptionHandler(error.response))
})

axiosPublicInstance.interceptors.response.use(async (response) => {
  return response
}, async (error) => {
  return Promise.reject(await exceptionHandler(error.response))
})