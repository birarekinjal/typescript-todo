import { IApiObject } from "../models/apiDataModels";

export function  getApiObject<T>(
  data?: T,
  isFetching = false,
  isError = false,
  errorMessage = '',
  error?:Error,
):IApiObject<T>{
     return {data ,isFetching,isError,errorMessage,error}
}
