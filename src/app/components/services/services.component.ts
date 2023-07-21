import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './service.service';
import { Service } from './service';
import { Observable, isEmpty } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  //styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  service :  Service = new Service();
  services: Service[];

  constructor(

    private serviceService:ServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllServices();
  }

  private getAllServices(){
    this.serviceService.getAllServices().subscribe(data => {
      this.services = data;
    });
  }

  saveService(){
    this.serviceService.saveService(this.service).subscribe(data =>{
      console.log(data);
      this.goToAllServices();
    },error => console.log(error));
  }

  updateService(){
    var id =String(this.service.id);
    var id_service = parseInt(id);

    this.serviceService.updateService(id_service, this.service).subscribe(dato => {
      this.goToAllServices();
    },error => console.log(error));

  }


  goToAllServices(){
    swal('Empleado registrado',`El empleado ${this.service.name} ha sido registrado con exito`,`success`);
    //this.router.navigate(['/services']);
    this.getAllServices();
  }


  getServiceById(id:number){
    //alert(id);
    this.serviceService.getServiceById(id).subscribe(dato =>{
      this.service = dato;
    },error => console.log(error));
    //this.router.navigate(['actualizar-empleado',id]);
  }

  deleteServiceById(id:number){

    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar registro",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.serviceService.deleteService(id).subscribe(dato => {
          console.log(dato);
          this.getAllServices();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })


   }

  onSubmit() {
   if (this.service.id == undefined) {
      this.saveService();
   }else{
      this.updateService();
   }



  }







}
