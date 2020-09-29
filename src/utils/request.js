import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUR_APP_BASE_API, // url = base url
    timeout: 5000 // request timeout
})



export default service