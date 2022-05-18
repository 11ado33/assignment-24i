import axios from 'axios'


const DATA_API_PATH = '/data.json'

//todo add type
export const getAllData = (): Promise<any> => {
    console.log("heeeeere")
    return new Promise((resolve, reject) => {
        axios.get(DATA_API_PATH).then(res => {
            console.log("heere")
            console.log(res.data)
            resolve(res.data)
        }).catch(err => reject(err))
    })
}
