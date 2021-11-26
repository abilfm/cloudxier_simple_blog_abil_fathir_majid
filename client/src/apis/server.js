import axios from "axios"

export default apiServer = axios.create({
    baseURL: "http://192.168.100.174:3000"
})