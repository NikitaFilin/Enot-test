export type Todo = {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
};

export interface ITodoMock {
  id: number;
  date: string;
  todos: Todo[];
}
