import { useEffect, useState } from "react";


const useEstateData = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const res = await fetch('/public/estate.json');
            const data = await res.json();
            setData(data);
        }
        fetchData();
    }, [])
    return { data };
};

export default useEstateData;
