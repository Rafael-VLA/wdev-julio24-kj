import { ChangeEvent, FormEvent, useState } from "react";

export const UserFormControlado = () => {

    // const [nombre, setNombre] = useState("rafael")
    const [formData, setFormData] = useState({
        nombre: "",
        ciudad: "",
        edad: 0
    })

    // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value)
    //     setNombre(e.target.value)
    // }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const value = e.target.value;
        const name = e.target.name; // ciudad

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSumbit = (e: FormEvent) => {
        e.preventDefault();

        
        if(formData.edad < 18){
            alert("La persona tiene que ser mayor de edad");
            return;
        }

        console.log(formData)
    }
 
    return (
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Formulario no controlado</h2>

        <p>Nombre en tiempo real: { formData.nombre }</p>

        <form onSubmit={handleSumbit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={ formData.nombre }
                onChange={ handleChange }
                name="nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Ciudad</label>
            <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={ formData.ciudad }
                onChange={ handleChange }
                name="ciudad"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Edad</label>
            <input 
                type="number" 
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={ formData.edad }
                onChange={ handleChange }
                name="edad"
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
  