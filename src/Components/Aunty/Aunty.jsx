import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div className="border-2 rounded-xl m-3 p-3 border-red-700 font-bold text-2xl">
            <h1>Aunty</h1>
            <section  className="flex">
                <Cousin name={'Mamshd'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;