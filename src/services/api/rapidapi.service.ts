import { APP_KEYS } from '../../modules/common/consts';
import HttpService from './http.service';

const { REACT_APP_RAPIDAPI_HOST, REACT_APP_RAPIDAPI_KEY } = process.env;

class RapidapiService extends HttpService {
  accessData = {
    'x-rapidapi-key': REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': REACT_APP_RAPIDAPI_HOST,
  };

  getWordInfo(query: string) {
    return this.get(
      {
        url: `${APP_KEYS.BACKEND_KEYS.WORDS}/${query}`,
        headers: this.accessData,
      },
      false
    );
  }
}

const rapidapiService = new RapidapiService(
  `https://${REACT_APP_RAPIDAPI_HOST}`
);
export default rapidapiService;
