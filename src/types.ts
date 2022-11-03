export type Todo = {
  title: string;
  description: string;
  isDone: boolean;
};

export interface ITodoMock {
  date: string;
  todos: Todo[];
}
