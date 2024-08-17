import useEstateData from "../../Hooks/useEstateData";
import EstateCard from "../EstateCard/EstateCard";


const EstatePart = () => {
    const { data } = useEstateData();
    //console.log(data);
    return (
        <div className="text-center my-8">
            <h2 className="text-4xl font-bold">Estate Part </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data.map((estate) => <EstateCard key={estate.id} estate={estate}></EstateCard>)
             }
           </div>
        </div>
    );
};

export default EstatePart;