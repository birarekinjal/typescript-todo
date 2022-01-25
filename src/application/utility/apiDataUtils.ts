import { IApiObject } from '../../application/models/apiDataModels';

export function getApiObject<T>(
  data?: T,
):IApiObject<T> {
  return { data };
}
