import { GrClose } from "react-icons/gr";

const Modal = ({ children, isOpen, closeModal, title }) => {
  const handleModalContaineClick = (e) => e.stopPropagation();
  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full min-h-screen bg-gray-400 bg-opacity-80 justify-center items-center ${
        isOpen ? "flex" : "hidden"
      }`}
      onClick={closeModal}
    >
      <div
        className="p-6 overflow-y-auto bg-white w-4/5 md:w-2/5 h-auto rounded-3xl"
        onClick={handleModalContaineClick}
      >
        <div className="flex justify-between mb-7">
          <div className="text-xl font-medium text-gray-900">{title}</div>
          <button className="mr-2" onClick={closeModal}>
            <GrClose />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
