import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormGroup, FormsModule,FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonInput, IonButton} from '@ionic/angular/standalone';
import { emailDomainValidator } from '../components/validators/dominio-email-validator';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, FormsModule, ReactiveFormsModule, CommonModule],
})
export class HomePage {
  //Le da validaciones a los campos del formulario
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, emailDomainValidator('@duocuc.cl')]],
    password: ['',Validators.required]
  })
  submitted: boolean = false; // Propiedad para controlar si el botón iniciar sesion se está presionando

  //Ingresa el FormBuilder al constructor
  constructor(private fb: FormBuilder){
    
  }

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl; // Asegúrate de que sea un FormControl
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl; // Asegúrate de que sea un FormControl
  }

  // Método para manejar el envío del formulario
  submitForm() {
    this.submitted = true; //Cambia el estado de submitted al presionar el botón
    if (this.form.valid) {
      console.log(this.form.value); // Imprime el valor del formulario
    } else {
      console.log('Formulario inválido');
    }
  }
}
