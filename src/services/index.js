import axios from "axios";

const api = axios.create({ baseURL: 'https://economia.awesomeapi.com.br/json' })

export const all = () => {
    return api.get('/all')
}

export const listen = (codes = []) => {
    return api.get(`/all/${codes.join()}`)
}

