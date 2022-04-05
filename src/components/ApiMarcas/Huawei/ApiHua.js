import axios from 'axios'

const HUA = 'http://localhost:3333/articulos?marca=HUA'

export const getProducts = async () => {
    return await axios.get (`${HUA}`)
}
