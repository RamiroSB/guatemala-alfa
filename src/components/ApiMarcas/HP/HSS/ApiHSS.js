import axios from 'axios'

const HSS = 'http://localhost:3333/articulos?marca=HSS'

export const getProducts = async () => {
    return await axios.get (`${HSS}`)
}
