import { FormEvent, useRef } from "react";



// Formularios no controlados y controlados
export const UserFormNoControlado = () => {

    // 1. Acceder a elementos del DOM  a través de una referencia
    // 2. Mantener el valor entre renderizados
    // const nombreRef = useRef<HTMLInputElement>(null);
    // const ciudadRef = useRef<HTMLInputElement>(null);
    // const edadRef = useRef<HTMLInputElement>(null);

    const inputsRef = useRef<HTMLInputElement[]>([]);

    const handleSumbit = (e: FormEvent) => {
        e.preventDefault();

        // const data = {
        //     nombre: nombreRef.current?.value, 
        //     ciudad: ciudadRef.current?.value, 
        //     edad: edadRef.current?.value, 
        // }

        const data = {
            nombre: inputsRef.current[0].value, 
            ciudad: inputsRef.current[1].value, 
            edad: inputsRef.current[2].value, 
        }

        console.log(data)
    }
 
    return (
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Formulario no controlado</h2>
        <form onSubmit={handleSumbit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                // ref={(el) => {
                //     if(el) nombreRef.current = el;
                // }}
                ref={(el) => {
                    if(el) inputsRef.current[0] = el;
                }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ciudad</label>
            <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                // ref={ ciudadRef }
                ref={(el) => {
                    if(el) inputsRef.current[1] = el;
                }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Edad</label>
            <input 
                type="number" 
                className="w-full p-2 border border-gray-300 rounded-lg" 
                // ref={ edadRef } 
                ref={(el) => {
                    if(el) inputsRef.current[2] = el;
                }}
            />
          </div>

          <div className="mb-4">
            <button type="submit" className="btn-primary">Enviar</button>
            {/* <input type="submit" className="btn-primary" value="Enviar" /> */}
          </div>
        </form>
      </div>
    );
  }
  