import Card from '../UI/Card';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      { props.users.length
        ? <ul>
          {props.users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} years old)
              </li>
            )
          })}
        </ul>
        : <p>There are no users in a list.</p>
      }
    </Card>
  )
}

export default UsersList;
