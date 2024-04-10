import UseInputState from "../UseInputState";

const HookForm = () => {

    // const [name, handleNameChange]=UseInputState('Rojoni')

    const emailState = UseInputState('rojoni@sojoni.go')
   
    const handleSubmit = e =>{
        console.log('rojoni kanto ', emailState.value);
        
        e.preventDefault();
    }

    return (
        <div>
              <form onSubmit={handleSubmit}>
        {/* <input value={name} onChange={handleNameChange} className="border-2 mb-2" type="text" name="name" /> */}
        <br />
        <input {...emailState} className="border-2 mb-2" type="email" name="email" id="" />
        <br />
        <input className="border-2 mb-2" type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
        </div>
    );
};

export default HookForm;