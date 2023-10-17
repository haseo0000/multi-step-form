import { SelectDataT } from "../../pages/FormPage";

type Props = {
  selectData: SelectDataT;
  handleAddons: (addons: string) => void;
};

function FormStepThree({ selectData, handleAddons }: Props) {
  const checkedHaveAddons = (name: string) => {
    return selectData.addOns.findIndex((item) => item.name === name) !== -1;
  };

  return (
    <>
      <label className={`step3-box-layout ${checkedHaveAddons("onlineService") && "add"}`}>
        <div className="checkbox-layout">
          <input
            type="checkbox"
            value="onlineService"
            checked={checkedHaveAddons("onlineService")}
            onChange={(e) => handleAddons(e.target.value)}
          />
          <div className="checkmark"></div>
        </div>
        <div className="description-layout">
          <h3>Online Service</h3>
          <span>Access to multiplayer games</span>
        </div>
        <div className="price-layout">
          <span>{selectData.isPlanYearly ? "+$10/yr" : "+$1/mo"}</span>
        </div>
      </label>
      <label className={`step3-box-layout ${checkedHaveAddons("largerStorage") && "add"}`}>
        <div className="checkbox-layout">
          <input
            type="checkbox"
            value="largerStorage"
            checked={checkedHaveAddons("largerStorage")}
            onChange={(e) => handleAddons(e.target.value)}
          />
          <div className="checkmark"></div>
        </div>
        <div className="description-layout">
          <h3>Larger storage</h3>
          <span>Extra 1TB of cloud save</span>
        </div>
        <div className="price-layout">
          <span>{selectData.isPlanYearly ? "+$20/yr" : "+$2/mo"}</span>
        </div>
      </label>
      <label className={`step3-box-layout ${checkedHaveAddons("customizable") && "add"}`}>
        <div className="checkbox-layout">
          <input
            type="checkbox"
            value="customizable"
            checked={checkedHaveAddons("customizable")}
            onChange={(e) => handleAddons(e.target.value)}
          />
          <div className="checkmark"></div>
        </div>
        <div className="description-layout">
          <h3>Customizable profile</h3>
          <span>Cystom theme on your profile</span>
        </div>
        <div className="price-layout">
          <span>{selectData.isPlanYearly ? "+$20/yr" : "+$2/mo"}</span>
        </div>
      </label>
    </>
  );
}

export default FormStepThree;
