import axios from 'axios'

const CN = 'http://localhost:3333/articulos?marca=CN'

export const getProducts = async () => {
    return await axios.get (`${CN}`)
}
