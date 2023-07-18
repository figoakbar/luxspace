import { API_URL, DEBUG_MODE } from "../../../config";

export default function fetchData({
    url, 
    method = 'GET', 
    host = API_URL
}){
    return fetch(`${host}${url}`, {
        method, mode: "cors", headers: {"Content-Type": "application/json"}
    }).then( async response => {
        const jsonResponse = await response.json()
        if(response.ok) 
        return jsonResponse
        
        throw new Error(JSON.stringify(jsonResponse))
    });
}