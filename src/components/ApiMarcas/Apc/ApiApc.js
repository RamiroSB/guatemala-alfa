import axios from 'axios'

const APC = 'http://localhost:3333/articulos?marca=006'

export const getProducts = async () => {
    return await axios.get (`${APC}`)
}
