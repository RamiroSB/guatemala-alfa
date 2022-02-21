import { Stock } from '../Data/Stock'

export const PedirDatosStock = () => {
  return new Promise ((resolve, reject)=> {
      setTimeout(()=>{
          resolve(Stock)
      },0)
  })
}
