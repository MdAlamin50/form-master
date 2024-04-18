import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Dad = () => {
    return (
        <div className="border-2 rounded-xl m-3 p-3 border-red-700 font-bold text-2xl">
             <h1>Dad</h1>
             <section className="flex">
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
             </section>
        </div>
    );
};

export default Dad;