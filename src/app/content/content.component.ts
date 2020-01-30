import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  GetBestFrom2020:any=null;  
  GetDataPopular: any=null;

  Loading:Array<number>=new Array<any>()
  
  constructor(private $ser: MovieService) 
  { 
    for(let i=0;i<12;i++)
    {
      this.Loading.push(i);
    }
  }

  ngOnInit() 
  {
    const GetBestFrom2020 = this.$ser.GetBestFrom2020().pipe();         
    const GetDataPopular = this.$ser.GetDataPopular().pipe();         

    GetBestFrom2020.subscribe(
      s => 
      {        
        this.GetBestFrom2020 = s                
      },
      error =>
      {
        console.log(error)
      }        
    ); 
    
    GetDataPopular.subscribe(
      s => 
      {        
        this.GetDataPopular = s                
      },
      error =>
      {
        console.log(error)
      }        
    );  
  }  

  Carousel()
  {
    let Caroussel=Array<any>();

    for(let i=0;i<this.GetBestFrom2020.results.length/3;i++)
    {
      Caroussel.push([this.GetBestFrom2020.results[i+2*i],this.GetBestFrom2020.results[i+1+2*i],this.GetBestFrom2020.results[i+2+2*i]]);
    }

    return Caroussel;
  }

  Carousel2()
  {
    let Caroussel=Array<any>();

    for(let i=0;i<this.GetDataPopular.results.length/3;i++)
    {
      Caroussel.push([this.GetDataPopular.results[i+2*i],this.GetDataPopular.results[i+1+2*i],this.GetDataPopular.results[i+2+2*i]]);
    }

    return Caroussel;
  }

}
