import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers: [AuthorService]
})
export class AuthorComponent implements OnInit {
 title = 'author';
 cone = false;
 ctwo = true;
  authors;
 // parentData: string;
  constructor(private authorService: AuthorService) {}
  message: string;
  childData: string;
  errorMessage: string;
  ngOnInit() {
     this.authorService.getAuthors()
                   .subscribe(responseData => this.authors = responseData,
                  errorData => this.errorMessage = errorData);
  }
  show(value) {
   this.message = value;
  }
  onSubmit(value: any) {
    console.log(value.name);
  }
  show2(value: any) {
    // this.parentData = value;
  //  console.log(this.parentData);
  }
}
