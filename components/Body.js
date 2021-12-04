import Deposits from "./Deposits";
import Months from "./Months";
import Users from "./Users";

const Body = () => {
  return (
    <div className="px-4">
      <div className="flex grid grid-cols-1 md:grid-cols-2 gap-x-10 mt-7 md:mb-10">
        <Users />
        <Months />
      </div>
      <Deposits />
    </div>
  );
};

export default Body;
