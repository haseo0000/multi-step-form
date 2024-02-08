import { useState } from "react";

import Step from "../components/step/step";
import Form from "../components/form/form";
import ButtonNext from "../components/bottonNext/buttonNext";
import Confirmation from "../components/confirmation/confirmation";

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface PlanT {
  selected: number;
  price: number;
}

export interface AddOnsT {
  name: string;
  price: number;
}

export type SelectDataT = {
  personalInfo: PersonalInfo;
  plan: PlanT;
  isPlanYearly: boolean;
  addOns: AddOnsT[];
};

export interface IErrors {
  name: string;
  email: string;
  phone: string;
}

const INIT_DATA = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {
    selected: 1,
    price: 9,
  },
  isPlanYearly: false,
  addOns: [],
};

function FormPage() {
  const [step, setStep] = useState(1);
  const [selectData, setSelectData] = useState<SelectDataT>(INIT_DATA);
  const [isConfirm, setIsConfirm] = useState(false);
  const [errors, setErrors] = useState<Partial<IErrors> | null>(null);

  const validateInfo = () => {
    // eslint-disable-next-line no-useless-escape
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const error: Partial<IErrors> = {};
    if (!selectData.personalInfo.name) {
      error.name = "Name is required";
    }
    if (!selectData.personalInfo.email) {
      error.email = "Email is required";
    } else if (!selectData.personalInfo.email.match(regexEmail)) {
      error.email = "Email is not valid";
    }

    if (!selectData.personalInfo.phone) {
      error.phone = "Phone is required";
    }

    setErrors(error);

    if (Object.keys(error).length !== 0) {
      return false;
    }

    return true;
  };

  const handleNextStep = () => {
    if (!validateInfo()) {
      return;
    }

    if (step < 4) {
      setStep((prev) => prev + 1);
      return;
    }
  };

  const handleBackStep = () => {
    if (step === 1) return;
    setStep((prev) => prev - 1);
  };

  const handlePersonalInfo = ({
    name,
    email,
    phone,
  }: {
    name: string;
    email: string;
    phone: string;
  }) => {
    setSelectData((prev) => ({
      ...prev,
      personalInfo: { name, email, phone },
    }));
  };

  const handleSelectedPlan = (plan: number, price: number) => {
    setSelectData((prev) => ({
      ...prev,
      plan: {
        selected: plan,
        price,
      },
    }));
  };

  const handleSelectedMonthOrYearPlan = (val: boolean) => {
    const temp = {
      selected: 0,
      price: 0,
    };

    // price for plan
    if (selectData.plan.selected === 1) {
      temp.selected = 1;
      temp.price = val ? 90 : 9;
    }
    if (selectData.plan.selected === 2) {
      temp.selected = 2;
      temp.price = val ? 120 : 12;
    }
    if (selectData.plan.selected === 3) {
      temp.selected = 3;
      temp.price = val ? 150 : 15;
    }

    //price for addOns
    if (selectData.addOns.length !== 0) {
      selectData.addOns.forEach((item, idx) => {
        if (item.name === "onlineService") {
          selectData.addOns[idx].price = val ? 10 : 1;
        }
        if (item.name === "largerStorage" || item.name === "customizable") {
          selectData.addOns[idx].price = val ? 20 : 2;
        }
      });
    }

    setSelectData((prev) => ({
      ...prev,
      isPlanYearly: val,
      plan: temp,
    }));
  };

  const handleAddons = (addOn?: string) => {
    let tempPrice = 0;
    if (addOn === "onlineService") {
      tempPrice = selectData.isPlanYearly ? 10 : 1;
    }
    if (addOn === "largerStorage" || addOn === "customizable") {
      tempPrice = selectData.isPlanYearly ? 20 : 2;
    }

    const temp = [...selectData.addOns];
    const index = temp.findIndex((item) => item.name === addOn);

    if (index !== -1) {
      temp.splice(index, 1);
    } else {
      temp.push({
        name: addOn!,
        price: tempPrice,
      });
    }

    setSelectData((prev) => ({ ...prev, addOns: temp }));
  };

  const handleConfirm = () => {
    setIsConfirm(true);
    console.log("confirm", selectData);
  };

  return (
    <div className="formPage-layout">
      <Step step={step} />
      <div className="right-layout">
        <div className="form-container">
          {isConfirm ? (
            <Confirmation />
          ) : (
            <Form
              step={step}
              selectData={selectData}
              handleSelectedPlan={handleSelectedPlan}
              handleSelectedMonthOrYearPlan={handleSelectedMonthOrYearPlan}
              handlePersonalInfo={handlePersonalInfo}
              handleAddons={handleAddons}
              errors={errors}
            />
          )}
        </div>
        {!isConfirm && (
          <ButtonNext
            handleConfirm={handleConfirm}
            handleBackStep={handleBackStep}
            handleNextStep={handleNextStep}
            step={step}
          />
        )}
      </div>
    </div>
  );
}

export default FormPage;
