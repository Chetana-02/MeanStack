import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CouponDunia';

  constructor(private router:Router) { }
  
  gotoRoute(page){
      this.router.navigate([page]);
  }

  public nameControl = new FormControl();
}
  
