import { loader } from "../assets";
const Loader = (props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img src={loader} className=" w-32 h-32 object-cotent" />
      <h1 className="font-bold text-white text-2xl mt-2">
        {props.title || "Loading..."}
      </h1>
    </div>
  );
};

export default Loader;
