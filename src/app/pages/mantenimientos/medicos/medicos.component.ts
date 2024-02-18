import { Component, OnDestroy, OnInit } from '@angular/core';
import { Medico } from '../../../models/medico.model';
import { MedicoService } from '../../../services/medico.service';
import { ModalImagenService } from '../../../services/modal-imagen.service';
import { BusquedasService } from '../../../services/busquedas.service';
import { Subscription, delay } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: ``
})
export class MedicosComponent implements OnInit, OnDestroy{

  public medicos: Medico[] = [];
  public cargando: boolean = true;
  public medicosTemp:Medico[] =  [];
  private imgSubs?: Subscription;
  constructor(
            private medicoService: MedicoService,
            private modalImagenService: ModalImagenService,
            private busquedaService: BusquedasService
  ){

  }
  ngOnDestroy(): void {
    this.imgSubs?.unsubscribe();
  }


  ngOnInit(): void {
    this.cargarMedicos();

    this.imgSubs = this.modalImagenService.nuevaImagen
    .pipe(
      delay(100))
    .subscribe(img=> 
      this.cargarMedicos());

  }



  cargarMedicos(){
    this.cargando = true;
    this.medicoService.cargarMedicos()
                        .subscribe(medicos=>{
                          this.cargando = false;
                         this.medicos = medicos; 

                         this.medicos   = medicos;
                         this.medicosTemp = medicos;
                         this.cargando = false;
                        })



  }

  abrirModal(medico:Medico){
    this.modalImagenService.abrirModal('medicos', medico._id, medico.img);
  }

  buscar(termino:string){
    if (termino.length === 0) {
      return this.medicos = this.medicosTemp;
    }
    this.busquedaService.buscar('medicos',termino)
      .subscribe(resultados => {
        this.medicos = resultados as Medico[];
      })
      return [];

  }
  borrarMedico(medico:Medico):any{
   

    Swal.fire({
      title: "¿Borrar médico?",
      text: `Esta a punto de eliminar a ${medico.nombre} ${medico.apellido}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar médico"
    }).then((result) => {
      if (result.value) {
        this.medicoService.borrarMedico(medico._id)
        .subscribe(resp => {
          this.cargarMedicos();
          Swal.fire('Usuario borrado',
                    `${medico.nombre} ${medico.apellido} fue eliminado correctamente`,
                    'success'
            )

            }
          );
        
      }
      
    });
  }
}
