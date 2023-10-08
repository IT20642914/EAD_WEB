import {ENV_LOCAL} from "./environment.local"
import {ENV_PROD} from "./environment.prod";


export interface ENV_VARIABLES {
    APP_ENV: string,
    API_BASE: string,
    AUTHORITY: string,
    CLIENT_ID: string,
    REDIRECT_URL: string,
    APP_SCOPES: string[],
    // GOOGLE_MAPS_API_KEY:string,
}

// DEFAULT PROD ENV VARIABLES
let ENV = ENV_PROD

// LOCAL ENV VARIABLES
if(process.env.REACT_APP_ENV === 'local') {
    ENV = ENV_LOCAL
}


export default ENV
