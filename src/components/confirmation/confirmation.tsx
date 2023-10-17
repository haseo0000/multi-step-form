import "./confirmation-styled.css";
import ThankyouIcon from "../../assets/icon-thank-you.svg";

function Confirmation() {
  return (
    <div className="confirm-layout">
      <img src={ThankyouIcon} alt="ThankyouIcon" width={70} />
      <h2>Thank you!</h2>
      <div className="content-layout">
        <span style={{ textAlign: "center" }}>
          Thanks for confirming your subscription! We hope you have fun using our
          platform. If you ever need support, Please feel free to email us at
          support@loremgaming.com
        </span>
      </div>
    </div>
  );
}

export default Confirmation;
