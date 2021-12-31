import { OpenGraphProperties } from "open-graph-scraper";

type Book = {
  type: "BOOK";
  title: string;
  url: string;
};

type Article = {
  type: "ARTICLE";
  url: string;
};

export type Media = Book | Article;
export type OpenGraph = {};

export type WeeklyMedia = {
  week: string;
  media: Media[];
};

export type WeeklyMediaOpenGraph = {
  week: string;
  // See: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/open-graph-scraper/index.d.ts
  media: OpenGraphProperties[];
};
