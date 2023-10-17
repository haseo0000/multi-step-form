import { PersonalInfo, SelectDataT } from "../../pages/FormPage";

type Props = {
  selectData: SelectDataT;
  handlePersonalInfo: ({ name, email, phone }: PersonalInfo) => void;
};

function FormStepOne({ selectData, handlePersonalInfo }: Props) {
  return (
    <>
      <div className="step1-section-layout">
        <label>Name</label>
        <input
          type="text"
          placeholder="e.g. Name"
          value={selectData.personalInfo.name}
          onChange={(e) => handlePersonalInfo({ ...selectData.personalInfo, name: e.target.value })}
        />
      </div>
      <div className="step1-section-layout">
        <label>Email Address</label>
        <input
          type="text"
          placeholder="e.g. example@email.com"
          value={selectData.personalInfo.email}
          onChange={(e) =>
            handlePersonalInfo({ ...selectData.personalInfo, email: e.target.value })
          }
        />
      </div>
      <div className="step1-section-layout">
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          value={selectData.personalInfo.phone}
          onChange={(e) =>
            handlePersonalInfo({ ...selectData.personalInfo, phone: e.target.value })
          }
        />
      </div>
    </>
  );
}

export default FormStepOne;
