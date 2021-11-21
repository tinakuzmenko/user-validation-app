import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import {useState} from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (!username.trim().length || !age.trim().length) {
      setError({
        title: 'Invalid input',
        message: 'Please, enter a valid name and a valid age (non-empty inputs).',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please, enter a valid age (> 0)',
      });
      return;
    }

    props.onAddUser(username, age);

    setUsername('');
    setAge('');
  };

  const errorHandler = () => {
    setError(null);
  }

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  return (
    <>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onErrorClose={errorHandler}
      />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User</label>
          <input id="username" type="text" onChange={usernameChangeHandler} value={username} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} value={age} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  )
};

export default AddUser;
