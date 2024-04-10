import { useEffect, useRef } from "react";

const RefFrom = () => {
   
    const nameRaf = useRef(null);
    const emailRaf = useRef(null);
    const passwordRaf =useRef(null);


    useEffect(() =>{
        nameRaf.current.focus();
    },[])

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRaf.current.value);
        console.log(emailRaf.current.value);
        console.log(passwordRaf.current.value);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRaf} className="border-2 mb-2" type="text" name="name" />
        <br />
        <input ref={emailRaf} className="border-2 mb-2" type="email" name="email" id="" />
        <br />
        <input ref={passwordRaf} className="border-2 mb-2" type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RefFrom;
