import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsers, selectIsLoading, selectError, fetchUsers } from '../redux/users/userSlice';

const UsersComponent = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>{`${user.name.first} ${user.name.last}`}</li>
      ))}
    </ul>
  );
};

export default UsersComponent;
