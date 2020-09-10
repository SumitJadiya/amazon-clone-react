import axios from "axios"

const instance = axios.create({
    baseURL: '' // cloud fn url
})

export default instance