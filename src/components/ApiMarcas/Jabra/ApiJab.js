import axios from 'axios'

const JAB = 'http://localhost:3333/articulos?marca=JAB'

export const getProducts = async () => {
    return await axios.get (`${JAB}`)
}
