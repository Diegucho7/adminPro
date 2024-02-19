import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalService } from '../../../services/hospital.service';
import { Hospital } from '../../../models/hospital.model';
import { MedicoService } from '../../../services/medico.service';
import { Medico } from '../../../models/medico.model';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: ``
})
export class MedicoComponent implements OnInit {

  public hospitales: Hospital[] = [];
  public medicoForm!: FormGroup;

  public medicoSeleccionado?: Medico;
  public hospitalSeleccionado?: Hospital;

  constructor(
            private fb: FormBuilder,
            private hospitalSevice: HospitalService,
            private medicoService:MedicoService,
            private router: Router,
            private activateRoute:ActivatedRoute
  ){

  }

  ngOnInit(): void {

    this.activateRoute.params
    .subscribe( ({id}) => this.cargarMedico(id));
    // this.medicoService.obtenerMedicoPorId

this.medicoForm = this.fb.group({
  nombre: ['', Validators.required],
  apellido: ['', Validators.required],
  hospital: ['', Validators.required]
})

    this.cargarHospitales();
    this.medicoForm.get('hospital')?.valueChanges.
                                    subscribe( hospitalId =>{
                                      this.hospitalSeleccionado = this.hospitales.find(h => h._id === hospitalId)
                                    })
  }


  cargarMedico(id:string){

    this.medicoService.obtenerMedicoPorId(id)
                      .subscribe(medico =>{
                        this.medicoSeleccionado = medico
                      })
  }

  cargarHospitales(){
    this.hospitalSevice.cargarHospitales()
                        .subscribe((hospitales:Hospital[]) =>{
                          this.hospitales = hospitales;
                        })
  }

  guardarMedico(){
    const {nombre,apellido} =this.medicoForm.value;
    this.medicoService.crearMedico(this.medicoForm.value)
      .subscribe((resp:any) =>{
        console.log(resp);
        Swal.fire('Creado',`${nombre} ${apellido} creado correctamente`, 'success');
        this.router.navigateByUrl(`/dashboard/medico/${resp.medico._id}`)
      })
  }

}