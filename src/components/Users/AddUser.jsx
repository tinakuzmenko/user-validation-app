import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import {useState} from 'react';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();

    if (!username.trim().length || !age.trim().length) return;
    if (+age < 1) return;

    props.onAddUser(username, age);

    setUsername('');
    setAge('');
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User</label>
        <input id="username" type="text" onChange={usernameChangeHandler} value={username} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} value={age} />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  )
};

export default AddUser;
