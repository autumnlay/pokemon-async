export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    timeout: 6000
})

export const sandboxAPI = azios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/autumn/pokemon',
    timeout: 5000
})