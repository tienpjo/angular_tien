export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: Array<String>;
  };
}
export interface BookState {
  books: Book[];
  status: 'idle' | 'loading' | 'error';
  error?: string;
}
