import { useEffect, useState } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const add = obj => {
    setUsers([...users, obj])
  } 
  
  const deleteUser = id => {
    axios
      .delete(`http://localhost:3004/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => {
        console.error("Error deleting user:", err);
      });
  };

  useEffect(() => {
    axios
    .get("http://localhost:3004/users")
    .then(res => {
      setUsers(res.data);
    })
  }, [])
  return (
    <div className='row'>
      <AddUser
        onAdd = {add}
      />
      <UserList
        users = {users}
        onDelete = {deleteUser}
      />
    </div>
  )
}

export default App
