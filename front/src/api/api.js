import axios from 'axios'

const API = axios.create({
    baseURL: 'http://localhost:1337/api'
})

export default API