import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  return (
    <div className="flex justify-between font-hanalei bg-[#3B3B3B] text-white p-8 ">
      <div className="text-3xl">Web3TV</div>
      <div className="flex gap-5 px-5 items-center text-xl">
        <ul className="flex gap-10 px-10">
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Contact</li>
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
