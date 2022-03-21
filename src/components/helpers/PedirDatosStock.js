import { Stock } from '../Data/Stock'

/* Funcion con promesa para pedir datos del array de objetos */
<<<<<<< HEAD
=======

>>>>>>> e2fe7b325fe4ff5ad87fbe165aa22fcf04415ad5
export const PedirDatosStock = () => {
  return new Promise ((resolve, reject)=> {
      setTimeout(()=>{
          resolve(Stock)
      },0)
  })
}
