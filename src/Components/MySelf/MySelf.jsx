import Special from "../special/Special";

const MySelf = () => {
    return (
        <div className="border-2 rounded-xl m-3 p-3 border-red-700 font-bold text-2xl">
            <h2>MySelf</h2>
            <section className="flex">
                <Special></Special>
            </section>
           
        </div>
    );
};

export default MySelf;