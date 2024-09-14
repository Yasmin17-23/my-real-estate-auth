
import useEstateData from "../../Hooks/useEstateData"
import EstateCard from "../EstateCard/EstateCard";


const EstatePart = () => {
    const {data} = useEstateData();
   
    //console.log(data);
    return (
        <div className="text-center my-12">
            <h2 className="text-4xl font-bold mb-4">Estate Part </h2>
           <div className="grid grid-cols-3  gap-6">
            {
                data.map((estate) => <EstateCard key={estate.id} estate={estate}></EstateCard>)
             }
           </div>
        </div>
    );
};

export default EstatePart;