import React from 'react';
import HobbyList from './ex01-Extreme-Hobbies';
import Guarantee from './ex02-Perfect-Customer-Service';
import Counter from './ex03-Higher-Than-10';
import './App.css';

function App() {
  return (
    <div className="guarantee">
        {/* Excercise 1 */}
        {/* <HobbyList /> */}

        {/* Excercise 2 */}
        <Guarantee img={'/images/f-delivery.png'} title="Free shipping" description="Free delivery on first order applies to the Free Delivery option and excludes other delivery options such as One-Day Delivery, Same-Day Delivery, Standard Delivery. For further info on ‘Shipping Rates & Times’."/>
        <Guarantee img={'/images/coin.png'} title="100% Money back" description="We're so convinced you'll absolutely love our easy to use software, that we're willing to offer a 7 day, risk free money back guarantee for all first time buyers."/>
        <Guarantee img={'/images/chat.png'} title="Online support 24/7" description="Proweb Technology Pvt. Ltd. is available for any web related support 24 hours a day and 7 days a week. We ensure that our clients won’t get into any trouble with the website."/>

        {/* Excercise 3 */}
        <Counter />
    </div>
  );
}

export default App;
