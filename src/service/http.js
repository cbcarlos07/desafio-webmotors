import axios from 'axios'

const http = axios.create({
    baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge'
})

export default http