import { Component } from '@angular/core';
import { items } from './model/items';
import { FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demoApp';
  showHeading: boolean = true;
  movies=['kgf', 'avatar', 'avengers'];
  items:items[]=[{
    name:'one', val:1},{name:'two',val:2}
  ]
  selectedValue: string='one'

  loginForm=new FormGroup({
    user: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  loginUser(){
      console.warn(this.loginForm.value)
  }
  get user(){
    return this.loginForm.get('user');
  }
  get password(){
    return this.loginForm.get('password');
  }
}
