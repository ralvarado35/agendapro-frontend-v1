import { Component } from '@angular/core';
import { FacturaService } from '../factura.service';
import { Factura } from '../factura';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-facturas',
  templateUrl: './listado-facturas.component.html',
  styleUrls: ['./listado-facturas.component.css']
})
export class ListadoFacturasComponent {


  facturas:Factura[];

  constructor(
    private facturaServicio:FacturaService,
    private router:Router) { }

  ngOnInit(): void {
    this.obtenerListaFacturas();
  }
  
  private obtenerListaFacturas(){
    this.facturaServicio.obtenerListaFacturas().subscribe(dato => {
      this.facturas = dato;
    });
  }

}
