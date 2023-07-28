import DonationForm from "./DonationForm"

<section>
  <h2>Recent Donations</h2>
  <ul>
    <li><span>Jo donated $25</span>You really need this. Really.</li>
    <li><span>Rami donated $10</span>Here, take a break from work!</li>

  </ul>
</section>

const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];


const RecentDonations = (donationDataToRender) => {
  return (

   const donatorName = donations.map((eachDonation) => { return <donatorName key={eachDonation.name} donationDataToRender={eachDonation.name} /> });
  const donationAmount = donations.map((eachAmount) => { return <donationAmount key={eachAmount.amount} donationDataToRender={eachAmount.amount} /> });
  const donatorMessage = donations.map((eachMessage) => { return <donatorMessage key={eachMessage.caption} donationDataToRender={eachMessage.caption} /> });
  )
}




export default function RecentDonations() {
  return null;
}
