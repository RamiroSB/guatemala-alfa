import axios from 'axios'

const ITO = 'http://localhost:3333/articulos?marca=ITO'

export const getProducts = async () => {
    return await axios.get (`${ITO}`)
}
