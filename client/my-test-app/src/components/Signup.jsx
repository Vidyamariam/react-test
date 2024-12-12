import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useSelector } from "react-redux";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    experience: "Fresher",
  });

  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the new user to Redux store
    dispatch(addUser(form));

    console.log("user added: ", form);

    setForm({
      name: "",
      email: "",
      password: "",
      experience: "Fresher",
    }); // Reset form
  };

  return (
    <div className="form-container">
      <h1 className="title">Signup form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="forminput"
          type="name"
          name="name"
          value={form.name}
          placeholder="enter your name"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          className="forminput"
          placeholder="enter your email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          className="forminput"
          type="password"
          name="password"
          value={form.password}
          placeholder="enter your password"
          onChange={handleChange}
        />
        <label>Experience</label>
        <select
          name="experience"
          value={form.experience}
          onChange={handleChange}
        >
          <option>Fresher</option>
          <option>Experienced</option>
        </select>

        <button style={{ marginTop: "10px" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
