
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Service } from './service';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

// Esta url obtiene el listado de todos los empleados en el backend
  private baseURL= "http://localhost:8080/api/v1/services";

  constructor(private httpClient: HttpClient) {}

  // Este metodo sirve para obtener todos los registros
  getAllServices(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(this.baseURL);
  }

  //este metodo sirve para obtener o buscar un registro
  getServiceById(id:number):Observable<Service>{
    return this.httpClient.get<Service>(`${this.baseURL}/${id}`);
  }

  //Este metodo sirve para registrar un empleado
  saveService(service:Service): Observable<Object> {

    console.log(this.baseURL)
    console.log(service)

    return this.httpClient.post(this.baseURL, service)
  }

  //Method to update service
  updateService(id:number, service:Service): Observable<Object>{
    return this.httpClient.put(this.baseURL + "/" + id, service);
  }

  deleteService(id:number): Observable<Object>{
    return this.httpClient.delete(this.baseURL + "/" + id);
  }












}
