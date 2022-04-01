import axios from 'axios';

const placeholderInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})
const omdbInstance = axios.create({
    baseURL: 'http://www.omdbapi.com/',

})

const APIkey = 'c128d6a5'


export const placeholderAPI = {
    getPhotos(amount: number) {
        return placeholderInstance.get(`photos?_start=0&_limit=${amount}`)
    }
}


export const omdbAPI = {
    getMovie(title: string) {
        return omdbInstance.get(`?apikey=${APIkey}&t=${title}`)
    }
}
