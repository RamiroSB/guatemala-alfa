import axios from 'axios'

const SDS = 'http://localhost:3333/articulos?marca=SDS'

export const getProducts = async () => {
    return await axios.get (`${SDS}`)
}
