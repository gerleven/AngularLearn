import { Component } from '@angular/core';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent {
  userName: string = "";
  email: string = "";
  password: string = "";
  showNewUserSent = false;
  newUser = {};

  public onSubmit(){
    this.newUser = {userName: this.userName, email: this.email, password:this.password}
    this.showNewUserSent = true
  }

}
