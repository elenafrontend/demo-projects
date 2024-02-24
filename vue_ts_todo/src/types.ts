export type TFilter = "All" | "Active" | "Done";

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}
