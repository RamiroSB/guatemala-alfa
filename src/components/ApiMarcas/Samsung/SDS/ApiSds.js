import axios from 'axios'

const SMO = 'http://localhost:3333/articulos?marca=SMO'

export const getProducts = async () => {
    return await axios.get (`${SMO}`)
}
