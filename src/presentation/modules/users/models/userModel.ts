import { IApiObject } from '../../../../application/models/apiDataModels';

export interface IUser {
  address:{}
  company: {}
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string

}
export interface IUserListState {
  users: IApiObject<IUser[]>
}
