
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './company';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

// Esta url obtiene el listado de todos los empleados en el backend
  private baseURL= "http://localhost:8080/api/v1/companies";

  constructor(private httpClient: HttpClient) {}

  // Este metodo sirve para obtener todos los registros
  getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.baseURL);
  }

  //este metodo sirve para obtener o buscar un registro
  getCompanyById(id:number):Observable<Company>{
    return this.httpClient.get<Company>(`${this.baseURL}/${id}`);
  }

  //Este metodo sirve para registrar un empleado
  saveCompany(company:Company): Observable<Object> {

    console.log(this.baseURL)
    console.log(company)

    return this.httpClient.post(this.baseURL, company)
  }

  //Method to update company
  updateCompany(id:number, company:Company): Observable<Object>{
    return this.httpClient.put(this.baseURL + "/" + id, company);
  }

  deleteCompany(id:number): Observable<Object>{
    return this.httpClient.delete(this.baseURL + "/" + id);
  }












}
