import { TransformacionAPI } from "../../Transformaciones/interfaces/transformacion-api";

export interface PersonajeAPI {
    id: number;
    name: string;
    ki?: string | number;
    race: string;
    gender: string;
    affiliation: string;
    image: string;
    description?: string; // Puede o no puede terner esta clave
    transformations?: TransformacionAPI[]; // Puede o no puede terner esta clave
}
