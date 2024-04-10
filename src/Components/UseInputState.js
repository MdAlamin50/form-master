import { useState } from "react"

const UseInputState = (defaultValue = null) =>{
    const [value, setValue] = useState(defaultValue);

    const OnChange = e =>{ 
        setValue(e.target.value);
    }

    return {value, OnChange};

      
    // const handleChange = e =>{ 
    //     setValue(e.target.value);
    // }

    // return [value, handleChange];

} 


export default UseInputState;

