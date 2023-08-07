import React from 'react'

import classes from './MealItem.module.css'

const MealItem = props => {
  return (
    <li className={classes.meal}>
      <h3>{props.name}</h3>
      <p className={classes.description}>{props.description}</p>
      <p className={classes.price}>{props.price}</p>
    </li>
  )
}

export default MealItem