import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  @ViewChild("myForm") miFormulario!: NgForm;

  public onSubmit(){
    if(this.miFormulario.valid){
      this.newUser = {userName: this.userName, email: this.email, password:this.password}
      this.showNewUserSent = true
    }
  }

}
