import { Component, OnInit } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrl: './listings-page.component.css'
})
export class ListingsPageComponent implements OnInit {
  // listings is a variable , it is of array of type Listing and is empty
  listings: Listing[]=[];


  ngOnInit(): void {
    // we assign the fakeListings to the listings array
  this.listings=fakeListings;
  }
}
