import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment' 
import { HttpClient } from '@angular/common/http';
import { Employee, EmployeeReponse } from '../interfaces/employee-response.interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class EmpleadoApiService {
    private readonly url: string = environment.apiUrl;

    constructor(private http: HttpClient){

    }

    public createEmployee(data: Employee):Observable<EmployeeReponse>{
        return this.http.post<EmployeeReponse>(`${this.url}/empleado`, data);
    }

    public editEmployee(data: Employee, id: string):Observable<EmployeeReponse>{
        return this.http.put<EmployeeReponse>(`${this.url}/empleado/${id}`, data);
    }

    public getEmployees():Observable<Employee[]>{
        return this.http.get<EmployeeReponse>(`${this.url}/empleado`).pipe(
            catchError((error) => {
                console.log(error)

                return [];
            }),
            map(({ data }) => data as Employee[])
        )
    }

    public getEmployee(id: string):Observable<Employee>{
        return this.http.get<EmployeeReponse>(`${this.url}/empleado/${id}`).pipe(
            map(({ data }) => data as Employee)
        )
    }

    public deleteEmployee(id: string):Observable<EmployeeReponse>{
        return this.http.delete<EmployeeReponse>(`${this.url}/empleado/${id}`);
    }

}