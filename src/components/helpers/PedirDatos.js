import { Empleados } from '../Data/Empleados'

export const PedirDatos = () => {
  return new Promise ((resolve, reject)=> {
      setTimeout(()=>{
          resolve(Empleados)
      },0)
  })
}
