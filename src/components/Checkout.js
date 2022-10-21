import { useSelector } from "react-redux";
import classes from "./Checkout.module.css";
import Confirmation from "./Confirmation";
import Form from "./Form";
const Checkout = () => {
  const formStatus = useSelector((state) => state.validity.formValid);
  return (
    <div className={classes.checkout}>
     {formStatus === "valid" ? <Confirmation/> : <Form/>} 
    </div>
  );
};

export default Checkout;
