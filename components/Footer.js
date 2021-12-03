import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col py-5 text-center bg-gray-800 text-white">
      <Image
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Wallet Roman Icon"
        width={40}
        height={40}
      />
      <p className="my-3">Copyright © 2021 Wallet Roman</p>
      <p>All rights reserved</p>
    </div>
  );
};

export default Footer;
