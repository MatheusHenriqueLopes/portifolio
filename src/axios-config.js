import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000/"

axios.defaults.headers.post["Content-Type"] = "application/json"

axios.defaults.timeout = 1000;

export default axios;

