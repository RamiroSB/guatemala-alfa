import axios from 'axios'

const YES = 'http://localhost:3333/articulos?marca=YES'

export const getProducts = async () => {
    return await axios.get (`${YES}`)
}
