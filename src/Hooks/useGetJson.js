import { useEffect, useState} from 'react';

function useGetJson(defaultValue, url, errmsg){
    const [JsonData, setJsonData] = useState(defaultValue);

    useEffect(() => {
        const GetJsonData = async (url) => {
            const res = await fetch(url);

            const htmlText = await res.text();
            try{
                const jsonData = JSON.parse(htmlText);
                setJsonData(jsonData);
            }catch(err){
                console.log(errmsg);
            }

            
        }

        GetJsonData(url);
    }, [url, errmsg]);

    return JsonData;
}

export default useGetJson;