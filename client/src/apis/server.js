import axios from "axios"

export default apiServer = axios.create({
    baseURL: "http://localhost:3000"
})