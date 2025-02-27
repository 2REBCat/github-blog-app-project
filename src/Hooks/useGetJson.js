import { useEffect, useState} from 'react';

function useGetJson(defaultValue, url, coursename, errmsg){
    const [JsonData, setJsonData] = useState(defaultValue);

    useEffect(() => {
        const GetJsonData = async (url) => {
            const res = await fetch(url);

            const htmlText = await res.text();
            let jsonData = defaultValue;
            try{
                jsonData = JSON.parse(htmlText);
            }catch(err){
                console.log(errmsg);
            }

            setJsonData(jsonData);
        }

        GetJsonData(url);
    }, [defaultValue, coursename, url, errmsg]);

    return JsonData;
}

export default useGetJson;