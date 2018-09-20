import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:4000/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getNews(): Observable<any> {
    return this.http.get(endpoint + 'news/0').pipe(
      map(this.extractData));
  }

  getNewsById(id): Observable<any> {
    return this.http.get(endpoint + 'news/' + id).pipe(
      map(this.extractData));
  }

  addNews (news): Observable<any> {
    console.log(news);
    return this.http.post<any>(endpoint + 'news/createNews', JSON.stringify(news), httpOptions).pipe(
      tap((news) => console.log(`added news w/ id=${news.id}`)),
      catchError(this.handleError<any>('addNews'))
    );
  }

  updateNews (id, news): Observable<any> {
    return this.http.put(endpoint + 'news/' + id, JSON.stringify(news), httpOptions).pipe(
      tap(_ => console.log(`updated news id=${id}`)),
      catchError(this.handleError<any>('updateNews'))
    );
  }

  deleteNews (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'news/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted news id=${id}`)),
      catchError(this.handleError<any>('deleteNews'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
