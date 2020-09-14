import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-clone-36782.cloudfunctions.net/api'
    // cloud fn url
})

export default instance