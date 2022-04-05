import axios from 'axios'

const TPL = 'http://localhost:3333/articulos?marca=TPL'

export const getProducts = async () => {
    return await axios.get (`${TPL}`)
}
