import { toast } from "react-toastify";
import { useForm } from "../../hooks/useForm";
import { useFamiliesContext } from "../../pages/_app";

const initialForm = {
  name: "",
  lastName: "",
  family: "",
};

const validateForm = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "El campo Nombre es requerido";
  }
  if (!form.lastName.trim()) {
    errors.email = "El campo Apellido es requerido";
  }
  if (!form.family.trim()) {
    errors.subject = "El campo Familia es requerido";
  }

  return errors;
};

const UserRegister = ({ closeModal, saveUser }) => {
  const { families } = useFamiliesContext();
  const { form, handleChange, setForm } = useForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(form);
    if (Object.keys(errors).length > 0) {
      for (const key in errors) {
        toast.warn(errors[key], {
          hideProgressBar: false,
          theme: "dark",
        });
      }
    } else {
      setForm(initialForm);
      closeModal();
      saveUser(form).then(toast.success("Usuario registrado con exito"), {
        theme: "dark",
      });
    }
  };

  return (
    <div className="w-full rounded-3xl px-6 py-4 bg-gray-400 shadow-md">
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input
            autoComplete="ÑÖcompletes"
            className="p-4 w-full rounded-xl shadow-lg border-4 focus:border-blue-300 outline-none"
            type="text"
            placeholder="Nombre"
            required
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <input
            autoComplete="ÑÖcompletes"
            className="p-4 w-full rounded-xl shadow-lg border-4 focus:border-blue-300 outline-none"
            type="text"
            placeholder="Apellido"
            required
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <select
            className="w-full p-4 rounded-xl shadow-lg border-4 focus:border-blue-300 outline-none"
            required
            name="family"
            value={form.family}
            onChange={handleChange}
          >
            <option value="seleccione" hidden>
              Selecciona una familia
            </option>
            {families.map((item) => {
              const {
                id,
                data: { nombre },
              } = item;
              return (
                <option key={id} value={id}>
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
