import axios from 'axios';



    export async function fetchData() {
        // const response = await axios.get('http://localhost:3001/users'); // Change the URL accordingly
        // if (!response.ok) {
        //   throw new Error('Failed to fetch data');
        // }
        // const data = await response.json();
        // return data;
        const api = axios.create({
            baseURL: "http://localhost:3001"})
          
        try {
            const response = await api.get('/users');
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    }
    
    export async function writeData(data:any) {

    }
    