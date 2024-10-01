import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from 'src/environments/environment'
const apiKey = environment.apiKey

import { Article, NewsResp } from "src/app/interfaces/index";
import { map, Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class NewsService {

  constructor(private http: HttpClient){}

  getTopNews():Observable<Article[]>{
    return this.http.get<NewsResp>("https://newsapi.org/v2/top-headlines?sources=techcrunch",{
      params: {
        apiKey: apiKey
      }
    }).pipe(map(( {articles } ) => articles));
  }
  getTopHeadlinesByCategory(category: string): Observable<Article[]> {
    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?category=${category}`, {
      params: { apiKey }
    }).pipe(map(({ articles }) => articles));
  }
}

