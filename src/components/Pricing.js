import React, {useState, useEffect } from "react";
import data from './pricingData';

export const Pricing = () => {
  const [plans, setPlans] = useState(null)

useEffect(() => {
  setPlans(data)
}, [])

  
  return (
    <div className="container">
      <h1>Pay</h1>
      
      <div className="card-container">
        
        {plans && plans.map((plan, i) =>( 
          <div className="card" key={i}>
          <h1>{plan.title}</h1>
          <h6>{plan.price}</h6>
          {plan.feature.map(feature =>(
            <p>{feature}</p>
          ))}
          <button type='submit' className='request'>Request</button>
        </div>
        ))}
    
        </div>
      </div>
  );
};

export default Pricing;
