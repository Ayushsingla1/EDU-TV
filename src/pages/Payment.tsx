import MovieCheckout from "../components/MovieCheckoutCard";
import image from "../assets/Deadpool.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Payment = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full flex">
        <div className="w-3/5 p-10 flex justify-center items-center">
          <img src={image} alt="" className="h-[600px]" />
        </div>
        <div className="w-2/5">
          <div className="min-h-screen bg-transparent flex items-center justify-center">
            <MovieCheckout
              title="James Bond: No Time To Die"
              gas={250}
              owner="0x567a927827f8b8fd47513e31a54820d56bcd"
              description="John Wick, a retired legendary hitman seeking vengeance after a group of Russian gangsters, led by Iosef Tarasov, steal his car and kill his beloved dog, a final gift from his late wife. This act reignites Wick's past and sets him on a relentless, high-octane mission against the criminal underworld that once feared him."
              buyers={1230000}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
