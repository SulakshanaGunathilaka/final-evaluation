import React from "react";
import { Steps, StepsProvider, useSteps } from "react-step-builder";

function Step2(props) {
  return (
    <div>
      <p>Email: <input name="email" /></p>
      <p>Phone: <input name="Phone" /></p>
    </div>
  );
}

export default Step2;