import axios from 'axios'

const QNP = 'http://localhost:3333/articulos?marca=QNP'

export const getProducts = async () => {
    return await axios.get (`${QNP}`)
}
