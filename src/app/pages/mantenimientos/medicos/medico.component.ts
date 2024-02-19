import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalService } from '../../../services/hospital.service';
import { Hospital } from '../../../models/hospital.model';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: ``
})
export class MedicoComponent implements OnInit {

  public hospitales: Hospital[] = [];
  public medicoForm!: FormGroup;

  public hospitalSeleccionado?: Hospital;

  constructor(
            private fb: FormBuilder,
            private hospitalSevice: HospitalService,

  ){

  }

  ngOnInit(): void {
this.medicoForm = this.fb.group({
  nombre: ['Diego', Validators.required],
  apellido: ['Eduardo', Validators.required],
  hospital: ['', Validators.required]
})

    this.cargarHospitales();
    this.medicoForm.get('hospital')?.valueChanges.
                                    subscribe( hospitalId =>{
                                      this.hospitalSeleccionado = this.hospitales.find(h => h._id === hospitalId)
                                    })
  }


  cargarHospitales(){
    this.hospitalSevice.cargarHospitales()
                        .subscribe((hospitales:Hospital[]) =>{
                          this.hospitales = hospitales;
                        })
  }

  guardarMedico(){
    console.log(this.medicoForm.value)
  }

}
