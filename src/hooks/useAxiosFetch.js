import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setLoading(true);
            try{
                const response = await axios.get(url, {cancelToken: source.token});

                if(isMounted){
                    setData(response.data);
                    setError(null);
                }
            } catch(error){
                if(isMounted){
                    setError(error);
                    setData([]);
                }
            } finally{
                isMounted && setLoading(false);
            }         
        }
        
        fetchData(dataUrl);

        const cleanup = () => {
            // console.log('clean up function');
            isMounted = false;
            source.cancel();
        }

        return cleanup;

    }, [dataUrl]);

    return {data, error, loading};
}

export default useAxiosFetch