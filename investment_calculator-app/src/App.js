import React, {useState} from 'react';

import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["investmentDuration"];
  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    } 
  }



  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* FORM */}
      <Form onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && <p style={{textAlign: 'center'}}>No investment caluclated yet.</p>}
      {userInput && <Table items={yearlyData} initialInvestment={userInput['currentSavings']} />}
    </div>
  );
}

export default App;
