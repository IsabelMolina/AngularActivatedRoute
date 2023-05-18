import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {

  constructor(private route:ActivatedRoute) { }
  
  snapshot(){
    console.log(this.route.snapshot);
  }

  title(){
    this.route.title.subscribe((title)=>{
      console.log(title);
    });
  }

  url(){
    this.route.url.subscribe((url)=>{
      console.log(url);
    })
  }

  params(){
    this.route.params.subscribe((params)=>{
      console.log(params);
    })
  }

  queryParams(){
    this.route.queryParams.subscribe((queryParams)=>{
      console.log(queryParams);
    })
  }

  fragment(){
    this.route.fragment.subscribe((fragment)=>{
      console.log(fragment);
    })
  }

  data(){
    this.route.data.subscribe((data)=>{
      console.log(data);
    })
  }

  outlet(){
    console.log(this.route.outlet)
  }

  component(){
    console.log(this.route.component);
  }

  routeConfig(){
    console.log(this.route.routeConfig);
  }

  root(){
    console.log(this.route.root);
  }

  parent(){
    console.log(this.route.parent);
  }

  firstChild(){
    console.log(this.route.firstChild);
  }

  children(){
    console.log(this.route.children);
  }

  pathFromRoot(){
    console.log(this.route.pathFromRoot);
  }

  paramMap(){
    this.route.paramMap.subscribe((paramMap)=>{
      console.log(paramMap);
    })
  }

  queryParamMap(){
    this.route.queryParamMap.subscribe((paramMap)=>{
      console.log(paramMap);
    })
  }

  toString(){
    console.log(this.route.toString());
  }

}
