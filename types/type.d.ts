// types.d.ts

export interface ITodo {
  __typename: string;
  id?: string;
  title?: string;
  completed?: boolean;
}

export interface IUser {
  todos: {
    data: ITodo[];
  };
}

export interface IData {
  user: IUser;
}