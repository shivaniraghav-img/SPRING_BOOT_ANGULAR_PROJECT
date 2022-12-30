import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../model/book';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private usersUrl: string;

  constructor(private http:HttpClient) { 
    this.usersUrl ='http://localhost:9090/books';
  }

  public findAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.usersUrl);
  }
  public save(book: Book){
    return this.http.post<Book>(this.usersUrl, book);
  }
  public update(book: Book,bid:number): Observable<Object>{
    return this.http.put(`${this.usersUrl}/${bid}`,book);
  }

  public delete(bid:number):Observable<Object>{
    return this.http.delete(`${this.usersUrl}/${bid}`);
  }
} 
