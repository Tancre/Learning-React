const YearlyResult = (props) => {
  return (
    <tbody>
    <tr>
      <td>{props.year}</td>
      <td>{props.totalSavings}</td>
      <td>{props.yearlyGaiend}</td>
      <td>{props.totalGained}</td>
      <td>{props.totalInvested}</td>
    </tr>
  </tbody>
  )
}

export default YearlyResult;