import axios from "axios";

const baseUrl = "http://localhost:3000"

export  async function getAllPosts () {

    const response = await axios.get(`${baseUrl}/news`)
    return response
}
export  async function getTopPost () {

    const response = await axios.get(`${baseUrl}/news/top`)
    return response
}

export async function searchPosts (title) {

    const response = await axios.get(`${baseUrl}/news/search?title=${title}`)
    return response
}