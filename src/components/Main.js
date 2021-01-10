import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../stores/home/thunks';
import { homeLoadingSelector, userSelector } from '../stores/home/selectors';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import "./Main.css";

function Main() {

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector(homeLoadingSelector);
  const users = useSelector(userSelector);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return 'loading users...';

  const { Search } = Input;
  const onSearch = value => setSearchTerm(value);

  return (
    <div className='content'>
      <Search
        placeholder="Search name..."
        allowClear
        enterButton="Search"
        size="large"
        style={{ width: 400 }}
        onSearch={onSearch}
      />
      <table className="informationTable">
        <thead>
          <tr className="tableCell">
            <th>Name</th>
            <th>User Name</th>
            <th>Company Name</th>
          </tr>
          {
            users.filter((users) => {
              if (setSearchTerm === "") {
                return users
              } else if (users.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return users
              }
            }).map(({ id, name, username, company }) => {
              return (
                <tr className="tableCell" key={id}>
                  <td className="table-link"><Link to={`/user/${id}`}>{name}</Link></td>
                  <td>{username}</td>
                  <td>{company.name}</td>
                </tr>
              );
            })
          }
        </thead>
      </table>
    </div>
  );
}

export default Main;