import { News } from "./news";

export interface NewsResponse {
    ok: boolean,
    news: News[]
}