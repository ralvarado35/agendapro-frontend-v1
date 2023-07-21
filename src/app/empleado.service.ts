
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

// Esta url obtiene el listado de todos los empleados en el backend
  private baseURL= "http://localhost:8080/api/v1/doctores";

  constructor(private httpClient: HttpClient) {}

  // Este metodo sirve para obtener los empleados
  obtenerListaDeEmpleados(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.baseURL);
  }

  
  //Este metodo sirve para actualizar el empleado
  actualizarEmpleado(id:number, empleado:Empleado): Observable<Object>{
    return this.httpClient.put(this.baseURL + "/" + id, empleado);
  }
  //Este metodo sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado): Observable<Object> {
    return this.httpClient.post(this.baseURL, empleado)
  }

   //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(this.baseURL + "/" + id);
  }



}
