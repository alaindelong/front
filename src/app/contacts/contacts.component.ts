import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ContactsService} from '../../services/contacts.service';
import  'rxjs/add/operator/map';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 pageContacts:any;
 pages: any;
 motCle: string = "";
 currentPage:number = 0;
 size:number = 5;
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    
    
  }
  
  doSearch(){
    this.contactsService.getContact(this.motCle,this.size,this.currentPage).subscribe(data =>{
      this.pageContacts = data;
      this.pages = new Array(data.totalPages);
   }, err => {
     console.log("y a une erreur");
   })
  }
  chercher(){
   this.doSearch();
  }
 
  goToPage(i:number){
    this.currentPage = i;
    this.doSearch();
  }
}
