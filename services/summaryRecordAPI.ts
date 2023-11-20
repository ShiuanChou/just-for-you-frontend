import API from './API';

const BASE_URL = '/summary-record';

const summaryAPI = {
  'getSummary': (userId: any): Promise<Response> =>
    API.get(`${BASE_URL}?userId=${userId}`),

  'getSummaryDetail': (sid: any): Promise<Response> =>
    API.get(`${BASE_URL}/${sid}`),

  'getAssignList': (assign: any): Promise<Response> =>
    API.get(`${BASE_URL}/list?assign=${assign}`),

  'assignSummary': (data: any): Promise<Response> =>
    API.patch(BASE_URL, data),

  'postSummary': (data: any): Promise<Response> =>
    API.post(BASE_URL, data),
};

export default summaryAPI;