import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../stores/home/thunks';
import { homeLoadingSelector, userSelector } from '../stores/home/selectors';
import { useHistory } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import "./UserDetail.css";


function UserDetail({ match }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const loading = useSelector(homeLoadingSelector);
    const user = useSelector(userSelector);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return 'loading users detail...';

    const ID = match.params.id - 1;

    return (

        <div className="userdetails">

            <button class="navbar-item" onClick={() => {
                history.push('/')
            }}>Back</button>

            <div className="userdetails-container">

                <div className="userdetails-card">
                    <div>
                        <Avatar size={64} icon={<UserOutlined style={{color: '#764ABC'}}/>} />
                    </div>

                    <div className="userdetails-title">
                        <br />
                        <h1>{user[ID].name}</h1>
                        <h2>{user[ID].username}</h2>
                        <p>{user[ID].website}</p>
                    </div>

                    <div className="userdetails-description">
                        <h3>Location</h3>
                        <p>{user[ID].address.city}</p>
                        <h3>Email</h3>
                        <p>{user[ID].email}</p>
                        <h3>Phone Number</h3>
                        <p>{user[ID].phone}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserDetail;
