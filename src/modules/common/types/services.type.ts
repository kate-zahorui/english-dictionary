import { AxiosRequestConfig } from 'axios';

export interface IServiceConfig extends AxiosRequestConfig<any> {
  url: string;
}
