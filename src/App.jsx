import "./App.css";
import ReusableForm from "./Components/ReusableForm/ReusableForm";
// import HookForm from './Components/HookForm/HookForm'
// import RefFrom from './Components/RefForm/RefFrom'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {
  const handleSingUpSubmit = (data) => {
    console.log("sign up data", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("update profile", data);
  };
 
  return (
    <>
      <h1 className="font-bold text-3xl mb-5">Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        formTitle={"Sing up"}
        handleSubmit={handleSingUpSubmit}
      >
        <div className="m-4 font-bold text-2xl">
          <h2>Sing Up</h2>
          <p>please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile update"}
        submitBtnText="Update"
        handleSubmit={handleUpdateProfile}
      >
        <div className="m-4 font-bold text-2xl">
          <h2>Update Profile</h2>
          <p>Always keep your profile updated</p>
        </div>
      </ReusableForm>
    </>
  );
}

export default App;
