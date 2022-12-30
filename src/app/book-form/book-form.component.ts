import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../../model/book';
import { BookServiceService } from '../../../service/book-service.service';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent  {

  book: Book ;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private bookService: BookServiceService) {
    this.book = new Book();
  }

  onSubmit() {
    this.bookService.save(this.book).subscribe(result => this.gotoBookList());
  }

  gotoBookList() {
    this.router.navigate(['/books']);
  }
}


