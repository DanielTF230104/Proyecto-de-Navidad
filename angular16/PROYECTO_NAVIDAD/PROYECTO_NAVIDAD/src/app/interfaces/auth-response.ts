export interface AuthResponse {
  ok: boolean;
  usuario?: {
    id: number;
    username: string;
    nombre: string;
    rol: 'usuario' | 'administrador'; 
    imagen?: string;                  
  };
  mensaje?: string;
}