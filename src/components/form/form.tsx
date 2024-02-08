import { IErrors, PersonalInfo, SelectDataT } from "../../pages/FormPage";
import "./form-styles.css";
import FormStepFour from "./formStepFour";
import FormStepOne from "./formStepOne";
import FormStepThree from "./formStepThree";
import FormStepTwo from "./formStepTwo";
import FormTitle from "./formTitle";

type Props = {
  step: number;
  selectData: SelectDataT;
  handleSelectedPlan: (plan: number, price: number) => void;
  handleSelectedMonthOrYearPlan: (val: boolean) => void;
  handlePersonalInfo: ({ name, email, phone }: PersonalInfo) => void;
  handleAddons: (addons: string) => void;
  errors: Partial<IErrors> | null;
};

const Form = ({
  step,
  selectData,
  handleSelectedPlan,
  handleSelectedMonthOrYearPlan,
  handlePersonalInfo,
  handleAddons,
  errors,
}: Props) => {
  const showTitieAndContent = () => {
    const contextObj: { title: string; content: string } = {
      title: "",
      content: "",
    };
    if (step === 1) {
      contextObj.title = "Personal info";
      contextObj.content = "Please provide your name, email address, and phone number.";
    }
    if (step === 2) {
      contextObj.title = "Select your plan";
      contextObj.content = "You have the option of monthly or yearly billing.";
    }
    if (step === 3) {
      contextObj.title = "Pick add-ons";
      contextObj.content = "Add-ons help enhance your gaming experience.";
    }
    if (step === 4) {
      contextObj.title = "Finishing up";
      contextObj.content = "Double-check everything looks OK before confirming.";
    }
    return contextObj;
  };

  return (
    <>
      <FormTitle titleAndContent={showTitieAndContent()} />
      <div className="input-layout">
        {step === 1 && (
          <FormStepOne
            selectData={selectData}
            handlePersonalInfo={handlePersonalInfo}
            errors={errors}
          />
        )}
        {step === 2 && (
          <FormStepTwo
            selectData={selectData}
            handleSelectedPlan={handleSelectedPlan}
            handleSelectedMonthOrYearPlan={handleSelectedMonthOrYearPlan}
          />
        )}
        {step === 3 && (
          <FormStepThree selectData={selectData} handleAddons={handleAddons} />
        )}
        {step === 4 && (
          <FormStepFour
            selectData={selectData}
            handleSelectedMonthOrYearPlan={handleSelectedMonthOrYearPlan}
          />
        )}
      </div>
    </>
  );
};

export default Form;
