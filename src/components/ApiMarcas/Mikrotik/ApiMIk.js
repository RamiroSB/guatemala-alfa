import axios from 'axios'

const MIK = 'http://localhost:3333/articulos?marca=065'

export const getProducts = async () => {
    return await axios.get (`${MIK}`)
}
