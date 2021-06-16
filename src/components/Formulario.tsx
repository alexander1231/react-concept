import { ChangeEvent, useState } from "react"
import { useForm } from "../hooks/useForm"

interface FormData  {
    email:string,
    nombre: string,
    edad:number

}


export const Formulario = () => {

    const {formulario, handleChange} = useForm<FormData>({
        email:'alexander.casias.b@gmail.com',
        nombre: 'Alexander Casias',
        edad:35
    });

    const {email, nombre,edad} = formulario

/*     const [formulario, setFormulario] = useState({
        email:'',
        nombre: ''
    })

    const handleChange = ({target}: ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = target

        setFormulario({
            ...formulario,
            [name]: value
        })
    } */

    return (
        <form autoComplete="off"  action="">
            <div className="mb-3">
                <label htmlFor="form-label">Email:</label>
                <input  type="email" 
                        className="form-control" 
                        name="email"
                        value={formulario.email}
                        onChange={(ev) => handleChange(ev)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="form-label">Email:</label>
                <input  type="text" 
                        className="form-control" 
                        name="nombre"
                        value={formulario.nombre}
                        onChange={handleChange}/>
            </div>

            <div className="mb-3">
                <label htmlFor="form-label">Edad:</label>
                <input  type="number" 
                        className="form-control" 
                        name="edad"
                        value={formulario.edad}
                        onChange={handleChange}/>
            </div>

            <pre>{JSON.stringify(formulario)}</pre>

        </form>
    )
}
