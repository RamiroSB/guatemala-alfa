import axios from 'axios'

const GRA = 'http://localhost:3333/articulos?marca=GRA'

export const getProducts = async () => {
    return await axios.get (`${GRA}`)
}
