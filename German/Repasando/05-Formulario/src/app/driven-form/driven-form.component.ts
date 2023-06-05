import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface NewUser{
  user_name: string;
  user_email: string;
  user_password: string;
}

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent {

  userToEdit: NewUser = {
    user_name: "German",
    user_email: "german@gmail.com",
    user_password: "German1988",
  }
  editMode=false;
  hidePassword = true;
  newUserSent: NewUser | undefined = undefined;
  showNewUserSent = false;
  
  miFormulario: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  
  ngOnInit(){
    if(this.editMode){
      this.miFormulario.get("userName")?.setValue(this.userToEdit.user_name);
      this.miFormulario.get("email")?.setValue(this.userToEdit.user_email);
      this.miFormulario.get("userPassword")?.setValue(this.userToEdit.user_password);
    }
  }
  
  onSubmit(){
    if (this.miFormulario.valid) {
      this.newUserSent = {
        user_name: this.miFormulario.get("userName")?.value,
        user_email: this.miFormulario.get("email")?.value,
        user_password: this.miFormulario.get("userPassword")?.value,
      }
      // Realizar acciones adicionales, como enviar los datos al servidor
      //Ej: myService.logInUser(payload: NewUser);
      this.showNewUserSent=true;
      console.log(this.miFormulario.value);
      console.log(this.newUserSent);
    }
  }

  test(){
    // this.miFormulario.get("userName")?.setValue("German");
    let aaa1= this.miFormulario.get("userPassword");
    let aaa2= this.miFormulario.get("userPassword")?.value;
    let aaa3= this.miFormulario.get("userPassword")?.valid;
    let aaa4= this.miFormulario.get("userPassword")?.errors?.['required'];
    let aaa5= this.miFormulario.get("userPassword")?.touched;
    debugger
  }

  validateName(){
    return (this.miFormulario.get('userName')?.errors?.['minlength'].actualLength < this.miFormulario.get('userName')?.errors?.['minlength'].requiredLength)
  }
  
  verPassword(){
    this.hidePassword = !this.hidePassword;
  }

  loadUser(){
    this.miFormulario.get("userName")?.setValue(this.userToEdit.user_name);
    this.miFormulario.get("email")?.setValue(this.userToEdit.user_email);
    this.miFormulario.get("userPassword")?.setValue(this.userToEdit.user_password);
  }

}
