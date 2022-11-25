import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Assets = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    assets: "",
    beneficiary: "",
    phoneNumber: "",
    percentage: "",
  });

  const handleNameInputChange = (event) => {
    setContactInfo({...contactInfo, name: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setContactInfo({...contactInfo, email: event.target.value})
  }
  const handleAssestsInputChange = (event) => {
    setContactInfo({...contactInfo, assets: event.target.value})
  }
  const handleBeneficiaryInputChange = (event) => {
    setContactInfo({...contactInfo, beneficiary: event.target.value})
  }
  const handlePhoneNumberInputChange = (event) => {
    setContactInfo({...contactInfo, phoneNumber: event.target.value})
  }
  const handlePercentageInputChange = (event) => {
    setContactInfo({...contactInfo, percentage: event.target.value})
  }

  return (
    <div className="bg-gray-200 p-16">
    <div>
      <h2> Who would you like to give your assets too?</h2>

      <p>
        A beneficiary is the person you wish to give your assets to upon your death.
        Most of the people wish to leave their assets to their spouse first, and when their spouse dies, to their children.
      <br />
        In the event a beneficiary is below 18 years old, the assets bequeathed to him under your Will
        will have to be held by your Executor until the minor turns 18 years old.
      <br />
        You assets are your money and property. They can also be:
      </p>

      <ul>
        <li><span className="font-bold">Movable assests </span>(for example: bonds, cash, company shares, vehicles, trust, jewelleries)</li>
        <li><span className="font-bold">Immovable assests </span>(for example: tangible personal properties, lands, houses)</li>
        <li><span className="font-bold">Digital assests </span>(for example: cryptocurrency accounts, online accounts, social media accounts)</li>
      </ul>

      <p>Kindly key in thier share proportion in percentage (%). Note that the percentage split across all beneficiaries must add up to 100%</p>
    </div>

    <div>
    <form className="w-full max-w-sm">
      <div className="">

      <div className="">
      <div className="lab">
        <label className="lab"> Type of Assest </label>
        <input
        type="text"
        name="assests"
        placeholder="eg. properties, assests, accounts, shares"
        onChange={handleAssestsInputChange}
        value={contactInfo.assests}
        className="inp"
        />
      </div>
      <div className="contact_form-div">
        <label className="lab"> Beneficiaries </label>
          <select
            name="beneficiary"
            id="dropdown"
            onChange={handleBeneficiaryInputChange}
            value={contactInfo.beneficiary}
            className="inp">
            <option value=" "> </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
      </div>
      </div>

      <div className="mb-6">
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

      <div className="mb-4">
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

    <div className="">
    <label className="lab"> Phone Number </label>
    <input
      type="number"
      name="phoneNumber"
      pattern="[+0-9]{15, }"
      onChange={handlePhoneNumberInputChange}
      value={contactInfo.phoneNumber}
      className="inp"
    />
  </div>

  <div className="">
  <label className="lab"> Percentage </label>
  <input
    type="number"
    name="phoneNumber"
    pattern="[0-9]{15, }"
    onChange={handlePercentageInputChange}
    value={contactInfo.percentage}
    className="inp"
    />
    </div>
    </div>
    </form>
    </div>
    <div className="mt-6 flex flex-row">
      <Link to="/Legal">
        <button className="w-1/2 border border-yellow-500  bg-yellow-500 text-white rounded-lg p-2">Previous</button>
      </Link>
      <Link to="/Download">
          <button className="w-1/2 border border-yellow-500  bg-yellow-500 text-white rounded-lg p-2">Download</button>
       </Link>
    </div>
    </div>
  )
}

export default Assets;
