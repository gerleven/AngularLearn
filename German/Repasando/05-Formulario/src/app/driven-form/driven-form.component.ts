import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent {

  miFormulario: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  verPassword(){
    alert(this.miFormulario.get("userPassword")?.value);
  }

  onSubmit(){
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
      // Realizar acciones adicionales, como enviar los datos al servidor
    }
  }

  test(){
    
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

}
