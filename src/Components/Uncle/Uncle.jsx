import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div className="border-2 rounded-xl m-3 p-3 border-red-700 font-bold text-2xl">
            <h1>Uncle</h1>
            <section className="flex ">
                <Cousin name={'Rafsan'}></Cousin>
                <Cousin name={'shoana'}></Cousin>
            </section>
            
        </div>
    );
};

export default Uncle;