import React from "react";
import "./Profile.css";
import { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";

function Profile() {
  const history = useHistory();
  const [{ user, profile }, dispatch] = useStateValue();
  const [name, setName] = useState(profile?.userName);
  const [phone, setPhone] = useState(profile?.phone);

  const submitProfile = (e) => {
    e.preventDefault();
    console.log("name -> ", name);

    let uid = user?.uid;

    // set into database
    db.collection("users")
      .doc(uid)
      .collection("profile")
      .doc(`profile${uid}`)
      .set({
        userName: name,
        phone: phone,
        email: user?.email,
      });

    history.push("/");
  };

  const handleNameChange = (val) => {
    setName(val);
  };

  const handlePhoneChange = (val) => {
    setPhone(val);
  };

  return (
    <div className="profile">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="profile__logo"
          alt=""
        />
      </Link>
      <div className="profile__container">
        <h1>Profile</h1>
        <form>
          <h5>Email</h5>
          <input type="email" defaultValue={user?.email} disabled />
          <h5>Name</h5>
          <input
            type="text"
            placeholder="Please Enter Your Name"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
          />
          <h5>Mobile</h5>
          <input
            type="text"
            placeholder="Please Enter Your Contact Number"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
          />

          <button onClick={submitProfile} className="profile__signInButton">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
