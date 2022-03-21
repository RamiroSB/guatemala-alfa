import { Stock } from '../Data/Stock'

/* Funcion con promesa para pedir datos del array de objetos */
export const PedirDatosStock = () => {
  return new Promise ((resolve, reject)=> {
      setTimeout(()=>{
          resolve(Stock)
      },0)
  })
}
