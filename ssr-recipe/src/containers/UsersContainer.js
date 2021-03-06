import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Users from '../components/Users';
import { Preloader } from '../lib/PreloadContext';
import { getUsers } from '../modules/users';

const UsersContainer = ({ users, getUsers }) => {
  // 컴포넌트가 마운트되고 나서 호출
  useEffect(() => {
    if (users) return; // users가 이미 유효하다면 요청하지 않음
    getUsers();
  }, [getUsers, users]);
  return (
    <div>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </div>
  );
};

export default connect(
  (state) => ({
    users: state.users.users,
  }),
  {
    getUsers,
  },
)(UsersContainer);
