import axios from 'axios'

const MER = 'http://localhost:3333/articulos?marca=MER'

export const getProducts = async () => {
    return await axios.get (`${MER}`)
}
