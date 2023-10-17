import "./buttonNext.styles.css";

type Props = {
  handleConfirm: () => void;
  handleBackStep: () => void;
  handleNextStep: () => void;
  step: number;
};

function ButtonNext({ handleConfirm, handleBackStep, handleNextStep, step }: Props) {
  const isStepNotOne = step > 1;
  const isLastStep = step === 4;

  const handleButton = () => {
    if (isLastStep) {
      handleConfirm();
      return;
    }
    handleNextStep();
  };

  return (
    <div className={`btn-next-container ${isStepNotOne && "flex-space-between"}`}>
      {step > 1 && (
        <button onClick={handleBackStep} className="Back-btn">
          Go Back
        </button>
      )}
      <button onClick={handleButton} className={`${step === 4 && "btn-confirm"}`}>
        {isLastStep ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}

export default ButtonNext;
