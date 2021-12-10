import Link from "next/link";
import { useFamiliesContext } from "../../pages/_app";

const UserRegister = () => {
  const { families } = useFamiliesContext();
  return (
    <div className="w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            required
            autoComplete="ÑÖcompletes"
            type="text"
            placeholder="Nombre"
            className="p-4 w-full rounded-xl shadow-lg border-2 focus:border-blue-300 outline-none"
          />
        </div>
        <div className="mt-5">
          <input
            required
            autoComplete="ÑÖcompletes"
            type="text"
            placeholder="Apellido"
            className="p-4 w-full rounded-xl shadow-lg border-2 focus:border-blue-300 outline-none"
          />
        </div>
        <div className="mt-5">
          <select
            required
            name="familia"
            className="w-full p-4 rounded-xl shadow-lg border-2 focus:border-blue-300 outline-none"
          >
            <option disabled selected hidden>
              Selecciona una familia
            </option>
            {families.map((item) => {
              const {
                id,
                data: { nombre },
              } = item;
              return (
                <option key={id} className="w-1/2">
                  {nombre}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mt-5">
          <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserRegister;
