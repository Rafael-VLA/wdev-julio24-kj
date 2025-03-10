import { Request, Response } from 'express';
import { supabase } from '../apis/supabase';
import BaseResponse from '../models/BaseResponse';

// Crear un nuevo recurso (empleado)
export const create = async(req: Request, res: Response) => {

    const empleado = req.body; // Obtenemos el empleado que nos envia el cliente

    const { error } = await supabase.from('empleado').insert(empleado);

    if(error){
        res.status(400).json(new BaseResponse(true, null, "No se pudo agregar el empleado"));
        return;
    }
    
    res.status(201).json(new BaseResponse(true, null, "El empleado se agregó exitosamente"))

}

// Obtiene todos los registro del recurso (empleado). Obtenemos todos los empleados
export const getAll = async(req: Request, res: Response) => {
    const { data } = await supabase.from('empleado').select()
    res.json(new BaseResponse(true, data, "Empleados encontrados"))
}

// Obtiene un único registro (empleado) por medio de un id
export const getById = async(req: Request, res: Response) => {

    // const { id } = req.params; // 1
    const id = req.params.id; // Obtenemos el id del param que envia el cliente

    // Consultamos un empleado usando supabase a través del select y usando una condición con eq([columna], [dato a buscar])
    const { data, error } = await supabase.from('empleado').select().eq("id", id);

    if(error != null){
        res.status(400).json(new BaseResponse(false, null, error.message));
        return;
    }

    // data === null = Preguntamos si la lista 'data' de supabase es null
    // Usamos el ternario para saber que guardar en la variable 'empleado' según la condición
    // data.at(0) = Extrae el primer valor de la lista, si no existe el valor me devuelve un valor undefined
    const empleado = data === null ? undefined : data.at(0);

    if(empleado === undefined){ // Preguntamos si el empleado no existe

        // Creamos una instancia del clase BaseReponse para crear el objeto
        // de respuesta y enviamos los parámetos necesarios al constructor
        const baseResponse = new BaseResponse(false, null, "No se ha encontrado el empleado");

        // Respondemos con un json al cliente con el objeto baseResponse
        res.status(404).json(baseResponse);
        return;
    }

    // Ejercicio: Usar el modelo base BaseReponse para enviar la respuesta al ciente
    res.json(new BaseResponse(true, empleado, "Se ha encontrado el empleado")); // status 200
}

// TAREA: Completar los endpoints remove y update según lo visto en clases

// Elimina un recurso (empleado)
export const remove = async (req: Request, res: Response) => {

    const id = req.params.id;

    const { data } = await supabase.from('empleado').select().eq("id", id);

    const empleado = data === null ? undefined : data.at(0);

    if(empleado === undefined){ // Preguntamos si el empleado no existe

        // Creamos una instancia del clase BaseReponse para crear el objeto
        // de respuesta y enviamos los parámetos necesarios al constructor
        const baseResponse = new BaseResponse(false, null, `No se ha encontrado el empleado con el id ${id}`);

        // Respondemos con un json al cliente con el objeto baseResponse
        res.status(404).json(baseResponse);
        return;
    }

    const { error } = await supabase
        .from('empleado')
        .delete()
        .eq('id', id);

    if(error != null){
        res.status(400).json(new BaseResponse(false, null, error.message));
        return;
    }

    res.json(new BaseResponse(true, id, `Se removió el empleado con el id ${id}`));
}

// Actualiza un recurso (empleado)
export const update = async(req: Request, res: Response) => {
    const id = req.params.id;
    const {
        nombre,
        apellido1,
        apellido2,
        salario,
        puesto,
        activo,
        correo
    } = req.body; // Obtenemos el empleado que nos envia el cliente

    const empleado = {
        nombre,
        apellido1,
        apellido2,
        salario,
        puesto,
        activo,
        correo
    }

    const { error } = await supabase.from('empleado').update(empleado).eq("id", id);

    if(error){
        res.status(400).json(new BaseResponse(true, null, "No se pudo actualizar el empleado"));
        return;
    }
    
    res.status(201).json(new BaseResponse(true, null, "El empleado se actualizó exitosamente"))
}

// export {
//     create,
//     getAll,
//     getById,
//     remove,
//     update
// }


// const empleadoController = {
//     create,
//     getAll,
//     getById,
//     remove,
//     update
// }

// export default empleadoController