import { Empleados } from '../Data/Empleados'

/* Funcion con promesa para pedir datos del array de objetos */
<<<<<<< HEAD
=======

>>>>>>> e2fe7b325fe4ff5ad87fbe165aa22fcf04415ad5
export const PedirDatos = () => {
  return new Promise ((resolve, reject)=> {
      setTimeout(()=>{
          resolve(Empleados)
      },0)
  })
}
