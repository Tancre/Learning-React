const User = props => {
  return (
    <li>{`${props.name} (${props.age} years old)`}</li>
  )
}

export default User;