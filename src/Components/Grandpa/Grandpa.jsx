import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const Grandpa = () => {
    return (
        <div className="border-2 rounded-xl m-3 p-3 border-red-700 font-bold text-2xl ">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
        </div>
    );
};

export default Grandpa;