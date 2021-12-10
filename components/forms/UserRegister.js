import Link from "next/link";
import { useFamiliesContext } from "../../pages/_app";

const UserRegister = () => {
  const { families } = useFamiliesContext();
  return (
    <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            required
            type="text"
            placeholder="Nombre"
            className="px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>
        <div className="mt-7">
          <input
            required
            type="text"
            placeholder="Apellido"
            className="px-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
          />
        </div>
        <div className="mt-7">
          <select
            name="familia"
            required
            className="w-full p-4 my-2 bg-gray-pale custom-form-input"
          >
            <option value="" disabled selected hidden>
              Selecciona una familia
            </option>

            {families.map((item) => {
              const {
                id,
                data: { nombre },
              } = item;
              return <option key={id}>{nombre}</option>;
            })}
          </select>
        </div>
        <div className="mt-7">
          <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
