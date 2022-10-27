
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import { Steps, Step,StepsProvider, useSteps } from "react-step-builder";
// import { Steps,step, StepsProvider, useSteps } from "react-step-builder";

import AllUser1 from "./component/AllUser1";
import Home from "./component/Home";
import Login from "./component/Login";
import Profile from "./component/pages/Profile";
import Employee from "./component/views/Employee";
// import Step1 from "./component/selectComponent/Step1";
// import Step2 from "./component/selectComponent/Step2";
// import FinalStep from "./component/selectComponent/FinalStep";




function App() {
  

  return (
    <>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Login/>} />
   <Route path="/home" element={<Home/>} />
   <Route path="/alluser1" element={<AllUser1/>} />
   <Route path="/profile" element={<Profile/>} />
   <Route path="/employee" element={<Employee/>} />
  
   

   </Routes>
 
   {/* <div className="App">
      <Steps>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={FinalStep} />
      </Steps>
    </div> */}
   </BrowserRouter>
    </>
  );
}

export default App;
