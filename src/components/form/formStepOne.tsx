import { IErrors, PersonalInfo, SelectDataT } from "../../pages/FormPage";

type Props = {
  selectData: SelectDataT;
  handlePersonalInfo: ({ name, email, phone }: PersonalInfo) => void;
  errors: Partial<IErrors> | null;
};

function FormStepOne({ selectData, handlePersonalInfo, errors }: Props) {
  return (
    <>
      <div className="step1-section-layout">
        <label>Name</label>
        <input
          type="text"
          placeholder="e.g. Name"
          value={selectData.personalInfo.name}
          onChange={(e) =>
            handlePersonalInfo({ ...selectData.personalInfo, name: e.target.value })
          }
        />
        {errors?.name && <span className="error-text">{errors.name}</span>}
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
        {errors?.email && <span className="error-text">{errors.email}</span>}
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
        {errors?.phone && <span className="error-text">{errors.phone}</span>}
      </div>
    </>
  );
}

export default FormStepOne;
