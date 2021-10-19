import React, { useEffect, useContext } from 'react'
import {UserDispatch} from './App';


const User = React.memo(function User({ user }) {

  useEffect(() => {
    console.log('User 값이 설정됨');
    console.log(user);
    return () => {
      console.log('User 값이 바꾸기전');
      console.log(user);
    };
  }, [user])

  const dispatch = useContext(UserDispatch);
    return (
      <div>
        <b
          style = {{
            cursor: 'pointer',
            color: user.active ? 'green' : 'black',
          }}
          onClick={()=> {
            dispatch({ type: 'TOGGLE_USER', id: user.id});
          }}
        >
          {user.username}
        </b>
        &nbsp; 
        <span>({user.email})</span>
        <button onClick={()=> dispatch({type: 'REMOVE_USER', id: user.id})}>삭제</button>
      </div>
    );
  });

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {users.map(user => (
                <User 
                  user={user} 
                  key={user.id} 
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
        ))}
        </div>
    )
}

export default React.memo(UserList);