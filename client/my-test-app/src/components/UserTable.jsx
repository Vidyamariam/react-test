import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "../redux/userSlice";

const UserTable = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const [editIndex, setEditIndex] = useState(null); // Track the index being edited
  const [editForm, setEditForm] = useState({}); // Store the edit form data

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditForm(users[index]);
  };

  const handleCancelEdit = () => {
    setEditIndex(null);
    setEditForm({});
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Save Edit
  const handleSaveEdit = (index) => {
    dispatch(updateUser({ index, user: editForm }));
    setEditIndex(null);
    setEditForm({});
  };

  // Handle Delete
  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };

  return (
    <div>
      <h2>Users List</h2>
      {users.length > 0 ? (
        <table border="1" style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Experience</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {editIndex === index ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={editForm.email}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <select
                        name="experience"
                        value={editForm.experience}
                        onChange={handleEditChange}
                      >
                        <option>Fresher</option>
                        <option>Experienced</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={() => handleSaveEdit(index)}>
                        Save
                      </button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.experience}</td>
                    <td>
                      <button onClick={() => handleEditClick(index)}>
                        Edit
                      </button>
                      <button onClick={() => handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users to display.</p>
      )}
    </div>
  );
};

export default UserTable;
