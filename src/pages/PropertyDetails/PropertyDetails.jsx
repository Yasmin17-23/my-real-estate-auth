import { useParams } from "react-router-dom";
import useEstateData from "../../Hooks/useEstateData";
import 'animate.css';
import PageTitle from "../../components/PageTitle/PageTitle";

const PropertyDetails = () => {
    const { data } = useEstateData();
    //console.log(data);
    //const {segment_name} = data;
    const { id } = useParams();
    const idInt = parseInt(id);
    const singleEstate = data.find(item => item.id === idInt);
    console.log(singleEstate, idInt);
    const { image, estate_title, segment_name, description, location, Area, price, room_types,
        Status, facilities } = singleEstate || {};
    return (
        <div className="hero min-h-screen">  
            <PageTitle title="Property Details"></PageTitle> 
            <div className="hero-content flex-col lg:flex-row justify-start items-start">
               <div className="mr-10">
                   <img
                    src={image}
                    className="rounded-lg shadow-2xl  lg:h-[300px] lg:w-[900px] mr-4" />
                     <p className="text-lg font-medium my-3"><span className="text-yellow-600 font-bold">
                        Location:</span> {location}</p>
                    <p className="text-lg font-medium my-3"><span className="text-yellow-600 font-bold">
                        Status:</span> {Status}</p>
               </div>
                <div>

                    <p className="text-2xl font-bold mb-4 text-red-950 
                    animate__animated animate__backInDown">{segment_name}</p>
                    <h1 className="text-4xl font-bold animate__animated 
                    animate__bounce  animate__delay-2s bg-gradient-to-r from-pink-500 via-blue-500
                     to-yellow-500 bg-clip-text text-transparent ">
                        {estate_title}</h1>
                    <p className="py-6">
                        {description}
                    </p>
                    <div className="flex flex-col md:flex-row justify-start gap-10 items-center">
                        <div className="bg-gray-600 p-6 text-white rounded-xl shadow-xl">
                            <span className="text-yellow-600 font-bold">Room:</span>
                            {room_types &&
                                room_types.map((room, index) => <li key={index}>{room}</li>)
                            }
                        </div>
                        <div className="bg-gray-600 p-6 text-white rounded-xl shadow-xl">
                             <span className="text-yellow-600 font-bold">Facility:</span>
                          
                            {
                                facilities &&
                                facilities.map((facility, idx) => <li key={idx}>{facility}</li>)
                            }
                        </div>
                    </div>
                   
                    <p className="text-lg font-medium my-3"><span className="text-yellow-600 font-bold">
                        Area:</span> {Area}</p>
                    
                    <p className="text-lg font-medium my-3"><span className="text-yellow-600 font-bold">
                        Price:</span> {price}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;