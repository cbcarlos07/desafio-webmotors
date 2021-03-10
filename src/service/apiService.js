import http from './http'

const listarMarcas = () => {
    return new Promise((resolve, reject)=>{
        http.get('/Make')
            .then(response => {
                resolve(response.data)
            })
    })
}

const listarModelosPorMarcas = id => {
    return new Promise((resolve, reject)=>{
        http.get('/Model', {
            params: {
                MakeID: id
            }
        })
            .then(response => {
                resolve(response.data)
            })
    })
}
const listarVersaoPorModelo = id => {
    return new Promise((resolve, reject)=>{
        http.get('/Version', {
            params: {
                ModelID: id
            }
        })
            .then(response => {
                resolve(response.data)
            })
    })
}

export { listarMarcas, listarModelosPorMarcas, listarVersaoPorModelo }