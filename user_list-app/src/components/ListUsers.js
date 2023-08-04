import styles from "./ListUsers.module.css";

import User from "./User";
import Card from "./UI/Card";

const ListUsers = (props) => {
  return (
    <Card className={styles['users']}>
      <ul>
        {props.items.map((item) => (
          <User key={Math.random().toString()} name={item.name} age={item.age} />
        ))}
      </ul>
    </Card>
  );
};

export default ListUsers;
