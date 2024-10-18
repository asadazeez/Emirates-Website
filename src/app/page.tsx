import Advertisement from "./_components/Advertisement";
import AdvertismentTwo from "./_components/AdvertismentTwo";
import Banner from "./_components/Banner";
import FeaturedProducts from "./_components/FeaturedProducts";
import Lens from "./_components/Lens";
import Products from "./_components/Products";
import Footer from "./_layout/Footer";
import Header from "./_layout/Header";

export default function Home() {
  return (
    <div className="bg-[#E7E7E3] pt-12 ">
      <Header />
      <Banner />
      <FeaturedProducts />
      <Advertisement />
      <AdvertismentTwo />
      <Products />
      <Lens />
      <Footer />
    </div>
  );
}
