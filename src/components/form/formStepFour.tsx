import { SelectDataT } from "../../pages/FormPage";

type Props = {
  selectData: SelectDataT;
  handleSelectedMonthOrYearPlan: (val: boolean) => void;
};

function FormStepFour({ selectData, handleSelectedMonthOrYearPlan }: Props) {
  const planPrice = () => {
    const yearOrMonth = selectData.isPlanYearly ? "yr" : "mo";
    return `$${selectData.plan.price}/${yearOrMonth}`;
  };

  const addOnsPrice = (addOn: string) => {
    const yearOrMonth = selectData.isPlanYearly ? "yr" : "mo";
    const index = selectData.addOns.findIndex((item) => item.name === addOn);

    return `$${selectData.addOns[index].price}/${yearOrMonth}`;
  };

  const checkAddOns = (addOn: string) => {
    return selectData.addOns.findIndex((item) => item.name === addOn) !== -1;
  };

  const totalPrice = () => {
    const total =
      selectData.addOns.reduce((start, val) => start + val.price, 0) +
      selectData.plan.price;

    return `+$${total}/${selectData.isPlanYearly ? "yr" : "mo"}`;
  };

  return (
    <>
      <div className="step4-box-layout">
        <section className="step4-header-layout">
          <div className="title-layout">
            <span>{`Arcade ${selectData.isPlanYearly ? "(Yearly)" : "(Monthly)"}`}</span>
            <span
              onClick={() =>
                handleSelectedMonthOrYearPlan(selectData.isPlanYearly ? false : true)
              }>
              Change
            </span>
          </div>
          <span className="price">{planPrice()}</span>
        </section>
        {selectData.addOns.length !== 0 && <div className="line"></div>}
        <section className="step4-details-layout">
          {checkAddOns("onlineService") && (
            <div>
              <span>Online service</span>
              <span>{`+${addOnsPrice("onlineService")}`}</span>
            </div>
          )}
          {checkAddOns("largerStorage") && (
            <div>
              <span>Larger storage</span>
              <span>{`+${addOnsPrice("largerStorage")}`}</span>
            </div>
          )}
          {checkAddOns("customizable") && (
            <div>
              <span>Customizable profile</span>
              <span>{`+${addOnsPrice("customizable")}`}</span>
            </div>
          )}
        </section>
      </div>
      <section className="step4-total-layout">
        <span>{`Total (per${selectData.isPlanYearly ? " year)" : " month)"}`}</span>
        <span>{totalPrice()}</span>
      </section>
    </>
  );
}

export default FormStepFour;
