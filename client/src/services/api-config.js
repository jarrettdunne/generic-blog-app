const baseUrl = process.env.NODE_ENV === 'production' ? 'https://ga-p4-api.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
})