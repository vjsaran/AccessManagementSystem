import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';  
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';   
import { filter } from 'rxjs/operators';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  title!: string;

  constructor(private router: Router,  
    private activatedRoute: ActivatedRoute,  
    private titleService: Title) { } 
    ngOnInit() {  
      this.router.events.pipe(  
          filter(event => event instanceof NavigationEnd),  
        ).subscribe(() => {  
          const rt = this.getChild(this.activatedRoute);  
          rt.data.subscribe(data => {  
            this.title = data['title'];
            this.titleService.setTitle(data['title'])
          });  
        });  
    }  
    
    getChild(activatedRoute: ActivatedRoute) :ActivatedRoute{  
      if (activatedRoute.firstChild) {  
        return this.getChild(activatedRoute.firstChild);  
      } else {  
        return activatedRoute;  
      }  
    }
}