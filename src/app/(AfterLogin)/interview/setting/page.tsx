"use client";

import { useState } from "react";
import QuestionPick from "./_component/QuestionPick";
import RecordSetting from "./_component/RecordSetting";

const Setting = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full py-20 px-12">
      {step === 1 && <QuestionPick setStep={setStep} />}
      {step === 2 && <RecordSetting setStep={setStep} />}
    </div>
  );
};

export default Setting;
