
import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    gender: "",
    email: "",
    address: "",
  });

  const handleNameInputChange = (event) => {
    setContactInfo({...contactInfo, name: event.target.value})
  }
  const handleGenderInputChange = (event) => {
    setContactInfo({...contactInfo, gender: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setContactInfo({...contactInfo, email: event.target.value})
  }
  const handleAddressInputChange = (event) => {
    setContactInfo({...contactInfo, address: event.target.value})
  }

  const handleNext = (event) => {
    // prevents the next button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);
  };

  return (
    <div className="form-container bg-gray-200">
      <div className="contact_content p-16">
        <form className="contact_form">
        <div className="info flex-row md:flex ">
          <div className="contact_form-div  m-2">
            <label className="lab"> Full Name </label>
            <input
            type="text"
            name="name"
            placeholder=""
            onChange={handleNameInputChange}
            value={contactInfo.name}
            className="inp"
          />
          </div>

          <div className="contact_form-div">
            <label className="lab"> Gender </label>
              <select
                name="gender"
                id="dropdown"
                onChange={handleGenderInputChange}
                value={contactInfo.gender}
                className="inp">
                <option value=" "> </option>
                <option value="Male"> Male </option>
                <option value="Female"> Female </option>
              </select>
          </div>
          </div>

          <div className="contact_form-div">
          <label className="lab"> Email </label>
          <input
            type="email"
            name="email"
            placeholder=""
            onChange={handleEmailInputChange}
            value={contactInfo.email}
            className="inp"
          />
        </div>

        <div className="contact_form-div">
          <label className="lab"> Home Address</label>
          <textarea
          type="text"
          name="address"
          placeholder=""
          onChange={handleAddressInputChange}
          value={contactInfo.address}
          className="inp"
        />
        </div>

        </form>
        <div>
            <Link to="/Legal">
                <button className="btn_1">Next</button>
             </Link>
        </div>
      </div>
    </div>
  )
}

export default About;
