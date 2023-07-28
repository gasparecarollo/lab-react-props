{/* <Progress targetAmountFromApp = {targetAmount} key/> 


props: {

  targetAmountFromApp: targetAmount
}


*/ }




import RecentDonations from "./RecentDonations";
import TargetAmount from "./TargetAmount";


export default function Progress(props) {

  console.log("props", props)
  console.log("props.targetAmountFromApp:", targetFromApp)

  return (


    <section className="progress">
      <h2>
        Raised <span className="secondary">$0</span> of
        <span className="secondary">${props.targetAmountFromApp}</span>
      </h2>
    </section>


  );
}



//Destructured version
export default function Progress({ targetAmountFromApp }) {


  console.log("targetAmountFromApp:", targetAmountFromApp)

  return (

    <section className="progress">
      <h2>
        Raised <span className="secondary">$0</span> of
        <span className="secondary">${props.targetAmountFromApp}</span>
      </h2>
    </section>

  );
}






/*

function Progress() {
  return {

    RecentDonations.forEach((donationAmount) => {
      raised = donationAmount.amount
    })
    Progress = TargetAmount - RecentDonations;


  };


} */