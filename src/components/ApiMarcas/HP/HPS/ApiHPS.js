import axios from 'axios'

const HPS = 'http://localhost:3333/articulos?marca=HPS'

export const getProducts = async () => {
    return await axios.get (`${HPS}`)
}
