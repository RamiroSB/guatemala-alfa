import axios from 'axios'

const YEA = 'http://localhost:3333/articulos?marca=YEA'

export const getProducts = async () => {
    return await axios.get (`${YEA}`)
}
