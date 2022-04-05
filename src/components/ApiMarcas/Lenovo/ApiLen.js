import axios from 'axios'

const LEN = 'http://localhost:3333/articulos?marca=LEN'

export const getProducts = async () => {
    return await axios.get (`${LEN}`)
}
