import axios from "axios";
import { getSession } from "next-auth/react";

const httpClient = () => {
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
    })
    instance.interceptors.request.use(
        async (request) => {
            let session: any = await getSession();
            if(session){
                request.headers.Authorization = `Bearer ${ session.accessToken ? session.accessToken : "" }`
            }
            return request;
        }
    )
    return instance;
}


export default httpClient;