import React, {useState, useEffect } from "react";
import data from './pricingData';

export const Pricing = () => {
  const [plans, setPlans] = useState(null)

useEffect(() => {
  setPlans(data)
}, [])

  
  return (
    <div className="container">
      <h1 className='title'>Pricing Plan</h1>
      
      <div className="card-container">
        
        {plans && plans.map((plan, i) =>( 
          <div className="card" key={i}>
          <h1 className='title'>{plan.title}</h1>
          <p className='price'>{plan.price}</p>
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
