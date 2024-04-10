
const ReusableForm = ({formTitle, handleSubmit, submitBtnText='Submit', children}) => {

    const handleLocalSubmit= e=>{
        e.preventDefault();
        const data = {
            name:e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value,
        }
        handleSubmit(data);
    }
  
    return (
        <div>
            {children}
              <form onSubmit={handleLocalSubmit}>
        <input className="border-2 mb-2" type="text" name="name" />
        <br />
        <input className="border-2 mb-2" type="email" name="email" id="" />
        <br />
        <input className="border-2 mb-2" type="password" name="password" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
        </div>
    );
};

export default ReusableForm;