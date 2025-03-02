export type Book = {
  id: number;
  author:{
    first_name_uk:string;
    last_name_uk:string;
  };
  title: string;
  image?: string;
};
