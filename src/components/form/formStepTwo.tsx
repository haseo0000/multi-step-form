import { SelectDataT } from "../../pages/FormPage";
import Toggle from "../toggle/toggle";

import ArcadeIcon from "../../assets/icon-arcade.svg";
import AdvanceIcon from "../../assets/icon-advanced.svg";
import ProIcon from "../../assets/icon-pro.svg";

type Props = {
  selectData: SelectDataT;
  handleSelectedPlan: (plan: number, price: number) => void;
  handleSelectedMonthOrYearPlan: (val: boolean) => void;
};

function FormStepTwo({
  selectData,
  handleSelectedPlan,
  handleSelectedMonthOrYearPlan,
}: Props) {
  const isSelectedPlan = (plan: number) => {
    return selectData.plan.selected === plan;
  };

  return (
    <>
      <div className="step2-plan-layout">
        <div
          className={`step2-section-layout ${isSelectedPlan(1) && "selected-plan"}`}
          onClick={() => handleSelectedPlan(1, selectData.isPlanYearly ? 90 : 9)}>
          <div>
            <img src={ArcadeIcon} alt="ArcadeIcon" width={"100%"} />
          </div>
          <div>
            <h3>Arcade</h3>
            <span>{selectData.isPlanYearly ? `$90/yr` : `$9/mo`}</span>
            {selectData.isPlanYearly && <span>2 months free</span>}
          </div>
        </div>
        <div
          className={`step2-section-layout ${isSelectedPlan(2) && "selected-plan"}`}
          onClick={() => handleSelectedPlan(2, selectData.isPlanYearly ? 120 : 12)}>
          <div>
            <img src={AdvanceIcon} alt="AdvanceIcon" width={"100%"} />
          </div>
          <div>
            <h3>Advanced</h3>
            <span>{selectData.isPlanYearly ? `$120/yr` : `$12/mo`}</span>
            {selectData.isPlanYearly && <span>2 months free</span>}
          </div>
        </div>
        <div
          className={`step2-section-layout ${isSelectedPlan(3) && "selected-plan"}`}
          onClick={() => handleSelectedPlan(3, selectData.isPlanYearly ? 150 : 15)}>
          <div>
            <img src={ProIcon} alt="ProIcon" width={"100%"} />
          </div>
          <div>
            <h3>Pro</h3>
            <span>{selectData.isPlanYearly ? `$150/yr` : `$15/mo`}</span>
            {selectData.isPlanYearly && <span>2 months free</span>}
          </div>
        </div>
      </div>
      <div className="step2-toggle-layout">
        <span className={`${!selectData.isPlanYearly && "selected"}`}>Monthly</span>
        <Toggle
          selected={selectData.isPlanYearly}
          handleSelectedMonthOrYearPlan={handleSelectedMonthOrYearPlan}
        />
        <span className={`${selectData.isPlanYearly && "selected"}`}>Yearly</span>
      </div>
    </>
  );
}

export default FormStepTwo;
