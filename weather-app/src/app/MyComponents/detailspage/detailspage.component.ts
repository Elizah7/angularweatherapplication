import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Weather } from '../weatherschema';

@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.css']
})
export class DetailspageComponent {
  currentPage = 1;
  itemsPerPage = 5;
  weatherdata: Weather[] = [];
  ngOnInit(): void {
    // Code to execute on component initialization (page load)
    this.makeAnotherGetRequest();

  }

  // Existing methods...

  constructor(private apiService: ApiService) { }

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
