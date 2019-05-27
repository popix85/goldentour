import {ApiUtils} from '../_utils/api-utils';

export class BaseApiServiceService {

  constructor() { }

  protected buildRemoteRestUrl(apiPart: string): string {
    return ApiUtils.REMOTE_API_URL + apiPart;
  }
}
