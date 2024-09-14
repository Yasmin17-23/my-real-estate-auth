import Banner from "../../components/Banner/Banner";
import EstatePart from "../../components/EstatePart/EstatePart";
import PageTitle from "../../components/PageTitle/PageTitle";


const Home = () => {
    return (
        <div className="">
              <PageTitle title="Home"></PageTitle>
              <Banner></Banner>
              <EstatePart></EstatePart>
           
        </div>
    );
};

export default Home;
