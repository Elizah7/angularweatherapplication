import { Component } from '@angular/core';
import { Weather } from '../weatherschema';
import { ApiService } from 'src/app/api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {


  
  currentPage = 1;
  itemsPerPage = 5;
  weatherdata: Weather[] = [];
  ngOnInit(): void {
    // Code to execute on component initialization (page load)
    this.makeAnotherGetRequest();

  }
 


  constructor(private apiService: ApiService,private sanitizer: DomSanitizer) {
       // Set the popover content as safe HTML
     
    }
   

  onSubmit():void{
     
  }
  makeAnotherGetRequest():void {
    this.apiService.getdata().subscribe(
      (response:any) => {
      this.weatherdata = response.data
      console.log(this.weatherdata)
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }



}



