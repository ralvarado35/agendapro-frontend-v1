import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from './company.service';
import { Company } from './company';
import { Observable, isEmpty } from 'rxjs';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  //styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {


  company :  Company = new Company();
  companies: Company[];

  constructor(
    
    private companyService:CompanyService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllCompanies();
  }

  private getAllCompanies(){
    this.companyService.getAllCompanies().subscribe(data => {
      this.companies = data;
    });
  }

  saveCompany(){
    this.companyService.saveCompany(this.company).subscribe(data =>{
      console.log(data);
      this.goToAllCompanies();
    },error => console.log(error));
  }

  updateCompany(){
    var id =String(this.company.id);
    var id_company = parseInt(id);

    this.companyService.updateCompany(id_company, this.company).subscribe(dato => {
      this.goToAllCompanies();
    },error => console.log(error));

  }


  goToAllCompanies(){
    swal('Empleado registrado',`El empleado ${this.company.name} ha sido registrado con exito`,`success`);
    //this.router.navigate(['/companies']);
    this.getAllCompanies();
  }


  getCompanyById(id:number){
    //alert(id);
    this.companyService.getCompanyById(id).subscribe(dato =>{
      this.company = dato;
    },error => console.log(error));
    //this.router.navigate(['actualizar-empleado',id]);
  }

  deleteCompanyById(id:number){

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
        this.companyService.deleteCompany(id).subscribe(dato => {
          console.log(dato);
          this.getAllCompanies();
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
   if (this.company.id == undefined) {
      this.saveCompany();
   }else{
      this.updateCompany();
   }



  }







}
