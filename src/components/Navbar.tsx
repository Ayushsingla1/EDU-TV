import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between font-hanalei bg-[#3B3B3B] text-white p-8 ">
      <div className="text-4xl"><Link to="/">Web3TV</Link></div>
      <div className="flex gap-5 px-5 items-center text-xl">
        <ul className="flex gap-10 px-10">
          <Link to='/'><li>Landing</li></Link>
          <Link to='/adminHome'><li>adminHome</li></Link>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/trailerplayer'><li>TrailerPlayer</li></Link>
          <Link to='/player'><li>Player</li></Link>
          <Link to='/payment'><li>Payment</li></Link>
        </ul>
        <ConnectButton
          chainStatus="icon"
          showBalance={false}
          accountStatus="address"
        />
      </div>
    </div>
  );
};

export default Navbar;
