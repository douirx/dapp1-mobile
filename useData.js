import {useState} from "react";
import axios from "axios";

export function useData(method, data) {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);

    async function fetchData(url) {
        console.log('URL:', url);
        console.log('Data:', data);
        try {
            let response;
            if (method === 'GET') {
                response = await axios({
                    method: method,
                    url: url
                });
            } else {
                response = await axios({
                    method: method,
                    url: url,
                    data: data
                });
            }
            setResponseData(response.data);
            console.log('Response Data:', responseData);
        } catch (error) {
            setError(error);
            console.log('Error:', error);
        }
    }

    return [responseData, error, fetchData];
}


