import { useSelector } from "react-redux";
import classes from "./Cards.module.css";
import FrontCard from "../images/bg-card-front.png";
import BackCard from "../images/bg-card-back.png";
import CardLogo from "../images/card-logo.svg";
const Cards = () => {
  let cardName = useSelector((state) => state.inputs.cardName);
  let cardNumber = useSelector((state) => state.inputs.cardNumber);
  let month = useSelector((state) => state.inputs.month);
  let year = useSelector((state) => state.inputs.year);
  let securityCode = useSelector((state) => state.inputs.securityCode);
  return (
    <div className={classes.cards}>
        <div className={classes.animated}/>
      <div className={classes.absoluteCard}>
        <div className={classes.frontCard}>
          <img src={FrontCard} alt="Updating front of credit card" />
          <div className={classes.content}>
            <img src={CardLogo} alt="" className={classes.logo} />
            <div className={classes.textBox}>
              <span className={classes.cardNumber}>
                {cardNumber[0] ? cardNumber[0] : 0}
                {cardNumber[1] ? cardNumber[1] : 0}
                {cardNumber[2] ? cardNumber[2] : 0}
                {cardNumber[3] ? cardNumber[3] : 0}
                <span className={classes.marginLeft}>
                  {cardNumber[4] ? cardNumber[4] : 0}
                  {cardNumber[5] ? cardNumber[5] : 0}
                  {cardNumber[9] ? cardNumber[9] : 0}
                  {cardNumber[7] ? cardNumber[7] : 0}
                </span>
                <span className={classes.marginLeft}>
                  {cardNumber[8] ? cardNumber[8] : 0}
                  {cardNumber[9] ? cardNumber[9] : 0}
                  {cardNumber[10] ? cardNumber[10] : 0}
                  {cardNumber[11] ? cardNumber[11] : 0}
                </span>
                <span className={classes.marginLeft}>
                  {cardNumber[12] ? cardNumber[12] : 0}
                  {cardNumber[13] ? cardNumber[13] : 0}
                  {cardNumber[14] ? cardNumber[14] : 0}
                  {cardNumber[15] ? cardNumber[15] : 0}
                </span>
              </span>
              <div className={classes.flexBox}>
                <span className={classes.name}>
                  {cardName ? cardName : "Jane Appleseed"}
                </span>
                <span className={classes.date}>
                  {month[0] ? month[0] : 0}
                  {month[1] ? month[1] : 0}/{year[0] ? year[0] : 0}
                  {year[1] ? year[1] : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.backCard}>
        <img src={BackCard} alt="Updating back of credit card" />
        <div className={classes.content}>
          <span className={classes.security}>
            {securityCode[0] ? securityCode[0] : 0}
            {securityCode[1] ? securityCode[1] : 0}
            {securityCode[2] ? securityCode[2] : 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
