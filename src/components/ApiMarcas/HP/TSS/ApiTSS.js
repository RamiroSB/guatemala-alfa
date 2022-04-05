import axios from 'axios'

const TSS = 'http://localhost:3333/articulos?marca=TSS'

export const getProducts = async () => {
    return await axios.get (`${TSS}`)
}
