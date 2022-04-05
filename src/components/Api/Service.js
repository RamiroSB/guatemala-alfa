import axios from 'axios'

const API = 'http://localhost:3333/articulos'

export const getProducts = async () => {
/*     console.log (await axios.get (`${API}`)) */
    return await axios.get (`${API}`)
}
