import { useSelector, useDispatch } from "react-redux";
import { validityActions } from "../data/store";
import Input from "./Input";
import inputData from "../data/inputData.json";
import classes from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  let nameValid = useSelector((state) => state.validity.nameValid);
  let numberValid = useSelector((state) => state.validity.numberValid);
  let monthValid = useSelector((state) => state.validity.monthValid);
  let yearValid = useSelector((state) => state.validity.yearValid);
  let codeValid = useSelector((state) => state.validity.codeValid);
  let cardName = useSelector((state) => state.inputs.cardName);
  let cardNumber = useSelector((state) => state.inputs.cardNumber);
  let month = useSelector((state) => state.inputs.month);
  let year = useSelector((state) => state.inputs.year);
  let securityCode = useSelector((state) => state.inputs.securityCode);

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (
      !nameValid ||
      !numberValid ||
      !monthValid ||
      !yearValid ||
      !codeValid ||
      cardName === "" ||
      cardNumber === "" ||
      month === "" ||
      year === "" ||
      securityCode === ""
    ) {
      dispatch(validityActions.invalidateForm());
    } else if (
      nameValid &&
      numberValid &&
      monthValid &&
      yearValid &&
      codeValid &&
      cardName !== "" &&
      cardNumber !== "" &&
      month !== "" &&
      year !== "" &&
      securityCode !== ""
    ) {
      dispatch(validityActions.validateForm());
    }
  };

  const handleFormChange = () => {
    dispatch(validityActions.hideFormErrors());
  };
  return (
    <form onSubmit={formSubmissionHandler} onChange={handleFormChange}>
      <div className={classes.inputs}>
        <Input {...inputData[0]} />
        <Input {...inputData[1]} />
        <div className={classes.bottomInputs}>
          <Input {...inputData[2]} />
          <Input {...inputData[3]} />
          <Input {...inputData[4]} />
        </div>
      </div>
      <button type="submit" className="btn" onClick={formSubmissionHandler}>
        Confirm
      </button>
    </form>
  );
};

export default Form;
