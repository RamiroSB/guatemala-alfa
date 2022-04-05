import axios from 'axios'

const ARU = 'http://localhost:3333/articulos?marca=ARU'

export const getProducts = async () => {
    /* console.log (await axios.get (`${ARU}`)) */
    return await axios.get (`${ARU}`)
}
