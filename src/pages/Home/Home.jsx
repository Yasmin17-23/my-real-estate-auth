import Banner from "../../components/Banner/Banner";
import EstatePart from "../../components/EstatePart/EstatePart";
import PageTitle from "../../components/PageTitle/PageTitle";




const Home = () => {
    return (
        <div className="max-w-6xl mx-auto pl-4 lg:px-6">
              <PageTitle title="Home"></PageTitle> 
             <Banner></Banner>    
            <EstatePart></EstatePart>
           
        </div>
    );
};

export default Home;
