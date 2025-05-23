export interface IBackendRes<T> {
  error?: string | string[];
  message: string;
  statusCode: number | string;
  data?: T;
}

export interface IModelPaginate<T> {
  meta: {
    page: number;
    pageSize: number;
    pages: number;
    total: number;
  };
  result: T[];
}

export interface IAccount {
  access_token: string;
  user: {
    id: string;
    email: string;
    userName: string;
    role: {
      id: string;
      name: string;
      permissions: {
        id: string;
        name: string;
        apiPath: string;
        method: string;
        module: string;
      }[];
    };
  };
}

export interface IGetAccount extends Omit<IAccount, "access_token"> {}

export interface IUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
  phone: string;
  age: number;
  gender: string;
  birthday: string;
  avatar: string;
  role?: {
    id: string;
    name: string;
  };
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface IFile {
    fileName: string;
    uploadTime: string;
}
