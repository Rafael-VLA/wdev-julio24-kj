export interface EmployeeReponse {
    ok:      boolean;
    data:    object;
    message: string;
}

export interface Employee {
    id?:        number;
    nombre:    string;
    apellido1: string;
    apellido2: string;
    salario:   number;
    puesto:    string;
    activo:    boolean;
    correo:    string;
}
