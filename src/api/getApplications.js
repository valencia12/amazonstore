import axios from "axios";
const baseUrl= "http://localhost:8080/"
export default class Apps{
    async getApps(){
        try {
            const res = await axios.get(`${baseUrl}catalogo`);
            console.log(res);
            return res
        } catch (error) {
            throw error
        }
    }
    async getAppsByCategory(category){
        try {
            const res = await axios.get(`${baseUrl}catalogo_filter_by_category?category=${category}`);
            return res
        } catch (error) {
            throw (error)
        }
    }
}