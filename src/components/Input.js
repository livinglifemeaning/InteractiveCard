import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputActions, validityActions } from "../data/store";
import classes from "./Input.module.css";

const Input = ({
  label,
  placeholder,
  size,
  id,
  autoComplete,
  type,
  inputmode,
  maxlength,
}) => {
  const formStatus = useSelector((state) => state.validity.formValid);
  const [errorMessage, setErrorMessage] = useState("Can't be blank");
  const dispatch = useDispatch();
  const inputRef = useRef();
  const handleChange = () => {
    updateInputValue();
    validateInput();
  };

  const updateInputValue = () => {
    id === "name" &&
      dispatch(inputActions.updateCardName(inputRef.current.value));
    id === "cardNumber" &&
      dispatch(inputActions.updateCardNumber(inputRef.current.value));
    id === "month" &&
      dispatch(inputActions.updateMonth(inputRef.current.value));
    id === "year" && dispatch(inputActions.updateYear(inputRef.current.value));
    id === "securityCode" &&
      dispatch(inputActions.updateSecurityCode(inputRef.current.value));
  };

  const validateInput = () => {
    let value = inputRef.current.value;
    if (value === "") {
      setErrorMessage("Can't be blank");
      id === "name" && dispatch(validityActions.invalidateName());
      id === "cardNumber" && dispatch(validityActions.invalidateNumber());
      id === "month" && dispatch(validityActions.invalidateMonth());
      id === "year" && dispatch(validityActions.invalidateYear());
      id === "securityCode" && dispatch(validityActions.invalidateCode());
    } else if (id === "cardNumber" && /[0-9]{16}/gm.test(value) === false) {
      setErrorMessage("Please enter a valid credit card number");
      dispatch(validityActions.invalidateNumber());
    } else if (
      id === "month" &&
      (+value > 12 || +value < 1 || /[0-9]{2}/gm.test(value) === false)
    ) {
      setErrorMessage("Please enter a valid expiration date");
      id === "month" && dispatch(validityActions.invalidateMonth());
    } else if (id === "year" && /[0-9]{2}/gm.test(value) === false) {
      setErrorMessage("Please enter a valid expiration date");
      id === "year" && dispatch(validityActions.invalidateYear());
    } else if (id === "securityCode" && /[0-9]{2}/gm.test(value) === false) {
      setErrorMessage("Please enter a valid security code");
      dispatch(validityActions.invalidateCode());
    } else {
      setErrorMessage("");
      id === "name" && dispatch(validityActions.validateName());
      id === "cardNumber" && dispatch(validityActions.validateNumber());
      id === "month" && dispatch(validityActions.validateMonth());
      id === "year" && dispatch(validityActions.validateYear());
      id === "securityCode" && dispatch(validityActions.validateCode());
    }
  };

  let attributes = {
    type,
    autoComplete,
    placeholder,
    id,
  };

  if (!label) {
    attributes["aria-labelledby"] = "expDate";
  }
  if (inputmode) {
    attributes["inputMode"] = inputmode;
  }
  if (maxlength) {
    attributes["maxLength"] = maxlength;
  }

  if (inputRef.current) {
    if (formStatus === "invalid" && errorMessage) {
      inputRef.current.ariaInvalid = "true";
    } else if (formStatus === "undefined") {
      inputRef.current.ariaInvalid = "false";
    }
  }

  return (
    <label
      className={classes.label}
      id={!label ? "expDate" : ""}
      htmlFor={label ? id : ""}
    >
      {label && <span className={classes.labelName}>{label}</span>}
      {!label && id !== "year" && (
        <span className={`${classes.labelName} ${classes.expLabel}`}>
          Exp. Date (MM/YY)
        </span>
      )}
      <input
        onChange={handleChange}
        ref={inputRef}
        {...attributes}
        required
        aria-invalid="false"
        aria-errormessage={`error${id}`}
        aria-labelledby={!label ? "expDate" : ""}
        className={`${classes.input} ${
          size === "long"
            ? classes.long
            : size === "med"
            ? classes.med
            : size === "small"
            ? classes.small
            : ""
        }`}
      />
      {errorMessage &&
        id !== "year" &&
        id !== "month" &&
        id !== "securityCode" && (
          <span id={`error${id}`} className={classes.errorMessage}>
            {errorMessage}
          </span>
        )}

      {errorMessage && (id === "month" || id === "securityCode") && (
        <span
          id={`error${id}`}
          className={`${classes.errorMessage} ${classes.expError} `}
        >
          {errorMessage}
        </span>
      )}
    </label>
  );
};

export default Input;
