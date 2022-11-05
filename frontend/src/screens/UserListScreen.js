import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; //, useParams
import { Button, Table } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { useDispatch, useSelector } from "react-redux";
import { listUsers, deleteUser } from "../actions/userActions";

const UserListScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if ((userInfo && userInfo.isAdmin) || successDelete) {
      dispatch(listUsers);
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      <h1>Users</h1>
      {successDelete && <Message variant="danger">User Deleted</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped responsive hover bordered className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <i className="fas fa-check" style={{ color: "green" }}></i>
                  ) : (
                    <i className="fas fa-check" style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      history.push(`/admin/user/${user._id}/edit`);
                    }}
                    className="btn-sm"
                    variant="light"
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                  <Button
                    type="submit"
                    onClick={(e) => deleteHandler(user._id)}
                    className="btn-sm"
                    variant="danger"
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserListScreen;
