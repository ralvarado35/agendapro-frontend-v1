
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';
import { Factura } from './factura';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {

// Esta url obtiene el listado de todos los empleados en el backend
  private baseURL= "http://localhost:8080/api/v1/facturas";

  constructor(private httpClient: HttpClient) {}

  // Este metodo sirve para obtener los empleados
  obtenerListaFacturas(): Observable<Factura[]> {
    console.log(this.httpClient.get<Factura[]>(this.baseURL));

    return this.httpClient.get<Factura[]>(this.baseURL);
  }


}
