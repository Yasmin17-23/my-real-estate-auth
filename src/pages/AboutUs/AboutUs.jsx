
import aboutImg1 from '../../assets/about-img1.jpg';
import aboutImg2 from '../../assets/about-img2.jpg';
import { MdRealEstateAgent } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaKey } from "react-icons/fa6";
import staffimg1 from '../../assets/emp-img-1.jpg';
import staffimg2 from '../../assets/emp-img-2.jpg';
import staffimg3 from '../../assets/emp-img-3.jpg';
import staffimg4 from '../../assets/emp-img-4.jpg';



const AboutUs = () => {
   return (
      <div>
         <div className="text-center my-6">
            <h2 className="text-xl lg:text-4xl font-bold">Why Choose Us</h2>
            <p>We provide full service at many steps!</p>
            <div className='flex flex-col md:flex-row justify-between items-center mt-4'>
               <div>
                  <div className='flex flex-col lg:flex-row justify-between items-center mb-4'>
                     <div className='text-4xl lg:text-6xl mr-3'>
                        <MdRealEstateAgent />
                     </div>
                     <div className='flex flex-col lg:justify-center items-start pl-5'>
                        <h5 className='text-xl lg:text-2xl font-medium'>Find Agency</h5>
                        <p>Find your real estate agency for your dream house.We are always ready for our
                           clients.
                        </p>
                     </div>
                  </div>
                  <div className='flex flex-col lg:flex-row  justify-between items-center mb-4'>
                     <div className='text-4xl lg:text-6xl mr-3'>
                        <MdOutlineHomeWork />
                     </div>
                     <div className='flex flex-col justify-center items-start pl-5'>
                        <h5 className='text-xl lg:text-2xl font-medium'>Find Dream House</h5>
                        <p>Find your real estate agency for your dream house.We are always ready for our
                           clients.
                        </p>
                     </div>
                  </div>
                  <div className='flex flex-col lg:flex-row  justify-between items-center'>
                     <div className='text-4xl lg:text-6xl mr-3'>
                        <FaKey />
                     </div>
                     <div className='flex flex-col justify-center items-start pl-5'>
                        <h5 className='text-xl lg:text-2xl font-medium'>Take Keys</h5>
                        <p>Find your real estate agency for your dream house.We are always ready for our
                           clients.
                        </p>
                     </div>
                  </div>
               </div>
               <div className='grid grid-col-4 gap-2 mt-4'>
                  <img src={aboutImg1} alt="" className='w-full rounded-xl' />
                  <img src={aboutImg2} alt="" className='w-full rounded-xl' />
               </div>
            </div>
         </div>
         <div className='text-center my-6 pl-5'>
            <h2 className="text-2xl lg:text-4xl font-bold">Our Agents</h2>
            <p>Meet our brilliant staff</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
               <div className='flex flex-col justify-center items-center bg-red-300 p-8 rounded-xl'>
                  <img src={staffimg1} alt="" className='w-12 h-12 rounded-full'/> 
                  <h4 className='lg:text-xl font-semibold my-2'>Md. Sazzad Hossain</h4>
                  <p className='font-bold'>Founder</p>
               </div>
               <div className='flex flex-col justify-center items-center bg-red-300 p-8 rounded-xl'>
                  <img src={staffimg2} alt="" className='w-10 h-10 lg:w-12 lg:h-12 rounded-full'/>
                  <h4 className='lg:text-xl font-semibold my-2'>Humayra Jannat</h4>
                  <p className='font-bold'>SEO</p>
               </div>
               <div className='flex flex-col justify-center items-center bg-red-300 p-8 rounded-xl'>
                  <img src={staffimg3} alt="" className='w-10 h-10 lg:w-12 lg:h-12 rounded-full'/>
                  <h4 className='lg:text-xl font-semibold my-2'>Md. Mamun</h4>
                  <p className='font-bold'>Manager</p>
               </div>
               <div className='flex flex-col justify-center items-center bg-red-300 p-8 rounded-xl'>
                  <img src={staffimg4} alt="" className='w-10 h-10 lg:w-12 lg:h-12 rounded-full'/>
                  <h4 className='lg:text-xl font-semibold my-2'>Sadia Khan</h4>
                  <p className='font-bold'>Executive</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;