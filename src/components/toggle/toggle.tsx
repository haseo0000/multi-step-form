import "./toggle-styles.css";

type Props = {
  selected: boolean;
  handleSelectedMonthOrYearPlan: (val: boolean) => void;
};

function Toggle({ selected, handleSelectedMonthOrYearPlan }: Props) {
  const handleToggleMode = () => {};

  return (
    <>
      <input
        type="checkbox"
        id="btn"
        checked={selected}
        onChange={(e) => handleSelectedMonthOrYearPlan(e.target.checked)}
      />
      <label htmlFor="btn" className="toggle_Btn" onClick={handleToggleMode}>
        <span></span>
      </label>
    </>
  );
}

export default Toggle;
