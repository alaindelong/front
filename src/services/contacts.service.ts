import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Contact} from '../model/model.contact';

@Injectable()
export class ContactsService{
   constructor(private http:Http){}

   getContact(motCle:string,size:number,page:number){
       return this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)
       .map(response =>response.json());
   }

   saveContact(contact:Contact){
     return this.http.post("http://localhost:8080/contacts",contact)
     .map(response =>response.json());
   }
}