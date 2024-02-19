import { Component, OnInit } from '@angular/core';
// need to import the ActivatedRoute so we can get the id part of the /listings/:id
import { ActivatedRoute } from "@angular/router";
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-listing-details-page',
  templateUrl: './listing-details-page.component.html',
  styleUrl: './listing-details-page.component.css'
})
export class ListingDetailsPageComponent implements OnInit {
// variable to save the current listing, the ? tells that this is optional as the value of listing is found at runtime as per the id of the url
listing?: Listing;
  constructor (
       // declare a private variable route that will be used to save teh activated route information
       private route: ActivatedRoute,
  ){}
  ngOnInit(): void {
    // save the id part of the URL in id constant
    const id = this.route.snapshot.paramMap.get('id');
    // set the current listing to the listing with id equal to the id in URL from the fakeListings data
    this.listing = fakeListings.find(listing => listing.id === id);
  }
}
