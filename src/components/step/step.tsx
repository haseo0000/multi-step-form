import "./step.styles.css";

type Props = {
  step: number;
};

function Step({ step }: Props) {
  return (
    <div className="step-container">
      <div className="step-item-layout">
        <div className={`step-item ${step === 1 && "step-active"}`}>
          <span>1</span>
        </div>
        <div>
          <span>STEP 1</span>
          <span>YOUR INFO</span>
        </div>
      </div>
      <div className="step-item-layout">
        <div className={`step-item ${step === 2 && "step-active"}`}>
          <span>2</span>
        </div>
        <div>
          <span>STEP 2</span>
          <span>SELECT PLAN</span>
        </div>
      </div>
      <div className="step-item-layout">
        <div className={`step-item ${step === 3 && "step-active"}`}>
          <span>3</span>
        </div>
        <div>
          <span>STEP 3</span>
          <span>ADD-ONS</span>
        </div>
      </div>
      <div className="step-item-layout">
        <div className={`step-item ${step === 4 && "step-active"}`}>
          <span>4</span>
        </div>
        <div>
          <span>STEP 4</span>
          <span>SUMMARY</span>
        </div>
      </div>
    </div>
  );
}

export default Step;
