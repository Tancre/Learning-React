import React, {useState} from 'react';

import AddUser from './components/AddUser';
import ListUsers from './components/ListUsers';

const users = [{name: 'gino', age: 18}];

function App() {
  const [newUser, setNewUser] = useState(users);

  const getUsers = newData => {

    console.log(newData);
    setNewUser(prevNewUser => {
      return ([newData, ...prevNewUser])
    })
  }

  console.log(newUser);

  return (
    <>
      <AddUser onSubmit={getUsers} />
      <ListUsers items={newUser} />
    </>
  );
}

export default App;
