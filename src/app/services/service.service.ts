import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class MovieService {
    
    Active:true;

    constructor(private $http: HttpClient) 
    {

    }

    GetBestFrom2020(): Observable<any> 
    {
      return this.$http.get<any>('https://api.themoviedb.org/3/discover/movie?primary_release_year=2020&sort_by=vote_average.desc&api_key=bb33634d1a0869cb8d5fa351b4d82332');
    }

    GetDataPopular(): Observable<any> 
    {
      return this.$http.get<any>('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=bb33634d1a0869cb8d5fa351b4d82332');
    }

    GetDatahighestRated(): Observable<any> 
    {
      return this.$http.get<any>('http://api-gateway-ext-prod-ue1-1080259533.us-east-1.elb.amazonaws.com/3/discover/movie?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=bb33634d1a0869cb8d5fa351b4d82332');
    }

    GetDataDrama(): Observable<any> 
    {
      return this.$http.get<any>('http://api-gateway-ext-prod-ue1-1080259533.us-east-1.elb.amazonaws.com/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=bb33634d1a0869cb8d5fa351b4d82332');
    }
    
}