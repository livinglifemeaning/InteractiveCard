import classes from "./Confirmation.module.css"
import Check from "../images/icon-complete.svg"
const Confirmation = () => {
    const reloadPage = () => {
        document.location.reload(); 
    } 
  return (
    <div className={classes.confirmation}>
      <img src={Check} alt="" className={classes.check}/> 
      <p className={classes.thanks}>Thank you!</p>
      <p className={classes.msg}>We've added your card details</p>
      <button onClick={reloadPage} className="btn">Continue</button>
    </div>
  )
}

export default Confirmation
