import YearlyResult from "./YearlyResult";

import styles from './Table.module.css'

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Table = (props) => {
  console.log(props.items);
  return (
    <table className={styles["result"]}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {props.items.map((result) => (
        <YearlyResult
          key={result.year}
          year={result.year}
          totalSavings={formatter.format(result.savingsEndOfYear)}
          yearlyGaiend={formatter.format(result.yearlyInterest)}
          totalGained={formatter.format(
            result.savingsEndOfYear -
            props.initialInvestment -
            result.yearlyContribution * result.year
          )}
          totalInvested={formatter.format(
            props.initialInvestment + result.yearlyContribution * result.year
          )}
        />
      ))}
    </table>
  );
};

export default Table;
