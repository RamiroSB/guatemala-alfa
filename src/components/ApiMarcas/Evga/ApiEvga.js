import axios from 'axios'

const EVG = 'http://localhost:3333/articulos?marca=EVG'

export const getProducts = async () => {
    return await axios.get (`${EVG}`)
}
