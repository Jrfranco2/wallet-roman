import { useAuth } from "../hooks/useAuth";
import Image from "next/image";

const Header = () => {
  const { disconnect } = useAuth();
  return (
    <div className="bg-gray-800 flex justify-between py-5 sticky top-0">
      <div className="ml-3 md:ml-10 flex items-center gap-x-3">
        <Image
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Wallet Roman Icon"
          width={40}
          height={40}
        />
        <p className="text-white text-2xl">Wallet Roman</p>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-3 md:mr-10">
        Sign Out
      </button>
    </div>
  );
};

export default Header;
