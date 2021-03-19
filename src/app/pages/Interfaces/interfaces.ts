export interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
  }

export interface Usuario{
  nombreUs: string;
  password: string;
  nombre: string;
  apellido: string;
  correo: string;
}

export interface Contacto{
  nombre: string;
  telefono: string;
  id: string;
}