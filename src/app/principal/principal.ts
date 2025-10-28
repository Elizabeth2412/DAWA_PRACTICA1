// principal.component.ts
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Metrica {
  titulo: string;
  valor: string;
  cambio: string;
  tendencia: 'up' | 'down';
  icono: string;
  color: string;
}

interface VentaMensual {
  mes: string;
  ventas: number;
  gastos: number;
}

interface Producto {
  nombre: string;
  cantidad: number;
}

interface Categoria {
  nombre: string;
  valor: number;
  color: string;
}

interface ActividadReciente {
  cliente: string;
  producto: string;
  monto: string;
  estado: string;
  estadoClase: string;
}

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.html',
  styleUrls: ['./principal.css']
})



export class Principal implements OnInit {

  metricas: Metrica[] = [
    {
      titulo: 'Ventas Totales',
      valor: '$34,500',
      cambio: '+12.5%',
      tendencia: 'up',
      icono: '💰',
      color: 'bg-blue'
    },
    {
      titulo: 'Nuevos Clientes',
      valor: '2,345',
      cambio: '+8.2%',
      tendencia: 'up',
      icono: '👥',
      color: 'bg-green'
    },
    {
      titulo: 'Pedidos',
      valor: '1,234',
      cambio: '-3.1%',
      tendencia: 'down',
      icono: '🛒',
      color: 'bg-purple'
    },
    {
      titulo: 'Tasa Conversión',
      valor: '3.24%',
      cambio: '+1.8%',
      tendencia: 'up',
      icono: '📈',
      color: 'bg-orange'
    }
  ];

  ventasMensuales: VentaMensual[] = [
    { mes: 'Enero', ventas: 4500, gastos: 2400 },
    { mes: 'Febrero', ventas: 5200, gastos: 2600 },
    { mes: 'Marzo', ventas: 4800, gastos: 2300 },
    { mes: 'Abril', ventas: 6100, gastos: 2800 },
    { mes: 'Mayo', ventas: 7200, gastos: 3100 },
    { mes: 'Junio', ventas: 6800, gastos: 2900 }
  ];

  productosTop: Producto[] = [
    { nombre: 'Laptop Pro', cantidad: 145 },
    { nombre: 'Mouse Inalámbrico', cantidad: 320 },
    { nombre: 'Teclado Mecánico', cantidad: 210 },
    { nombre: 'Monitor 27"', cantidad: 180 },
    { nombre: 'Webcam HD', cantidad: 95 }
  ];

  categorias: Categoria[] = [
    { nombre: 'Electrónica', valor: 35, color: '#3b82f6' },
    { nombre: 'Accesorios', valor: 25, color: '#10b981' },
    { nombre: 'Software', valor: 20, color: '#f59e0b' },
    { nombre: 'Servicios', valor: 15, color: '#8b5cf6' },
    { nombre: 'Otros', valor: 5, color: '#ef4444' }
  ];

  actividadReciente: ActividadReciente[] = [
    {
      cliente: 'Juan Pérez',
      producto: 'Laptop Pro',
      monto: '$1,299',
      estado: 'Completado',
      estadoClase: 'estado-completado'
    },
    {
      cliente: 'María García',
      producto: 'Mouse Inalámbrico',
      monto: '$29',
      estado: 'Pendiente',
      estadoClase: 'estado-pendiente'
    },
    {
      cliente: 'Carlos López',
      producto: 'Monitor 27"',
      monto: '$399',
      estado: 'Completado',
      estadoClase: 'estado-completado'
    },
    {
      cliente: 'Ana Martínez',
      producto: 'Teclado Mecánico',
      monto: '$89',
      estado: 'Enviado',
      estadoClase: 'estado-enviado'
    },
    {
      cliente: 'Pedro Sánchez',
      producto: 'Webcam HD',
      monto: '$79',
      estado: 'Completado',
      estadoClase: 'estado-completado'
    }
  ];

  // Variables para el gráfico de barras
  maxCantidad: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Calcular el máximo para el gráfico de barras
    this.maxCantidad = Math.max(...this.productosTop.map(p => p.cantidad));
  }

  // Método para calcular el ancho de la barra en porcentaje
  getBarWidth(cantidad: number): string {
    return `${(cantidad / this.maxCantidad) * 100}%`;
  }

  // Método para obtener el total de ventas
  getTotalVentas(): number {
    return this.ventasMensuales.reduce((sum, item) => sum + item.ventas, 0);
  }

  // Método para obtener el total de gastos
  getTotalGastos(): number {
    return this.ventasMensuales.reduce((sum, item) => sum + item.gastos, 0);
  }
}