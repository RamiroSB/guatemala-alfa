import axios from 'axios'

const UBI = 'http://localhost:3333/articulos?marca=UBI'

export const getProducts = async () => {
    return await axios.get (`${UBI}`)
}
