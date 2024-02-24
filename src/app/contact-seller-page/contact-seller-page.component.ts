import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-seller-page',
  templateUrl: './contact-seller-page.component.html',
  styleUrl: './contact-seller-page.component.css'
})
export class ContactSellerPageComponent implements OnInit{

  email: string='';
  message: string='';
  listing?:Listing;
   

  constructor (
    private route: ActivatedRoute,
    private router : Router,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing= fakeListings.find(listing => listing.id === id);
    this.message= `Hi! I am interested in your ${this.listing?.name}`;
    // console log the variables to see their current values
    console.log(this.route, this.router, this.email, this.message, id, this.listing);

  }


}
