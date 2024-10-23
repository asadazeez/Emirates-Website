import Advertisement from "./_components/Advertisement";
import AdvertisementTwo from "./_components/AdvertisementTwo";
import Banner from "./_components/Banner";
import FeaturedProducts from "./_components/FeaturedProducts";
import Lens from "./_components/Lens";
import Products from "./_components/Products";
import { frontendApi } from "./apis/apis";

const page = async () => {
  const response = await frontendApi.getHomepage()
  const gallery = response.data.data.category
  const galleryTwo = response.data.data.brand

  
  return (
    <div className="bg-[#E7E7E3]">
      <Banner />
      <FeaturedProducts />
      <Advertisement gallery={gallery} />
      <AdvertisementTwo galleryTwo={galleryTwo} />
      <Products />
      <Lens />
    </div>
  );
};
export default page;

