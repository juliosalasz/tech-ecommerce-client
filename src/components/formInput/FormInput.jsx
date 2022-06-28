import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./formInput.css";

const FormInput = ({ onIcon, ...otherProps }) => {
  return (
    <div>
      <div className="inputField">
        <div className="inputFieldI">
          <FontAwesomeIcon icon={onIcon} className="" />
        </div>
        <input {...otherProps} />
      </div>
    </div>
  );
};

export default FormInput;
