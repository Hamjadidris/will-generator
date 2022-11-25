import React, { Component } from 'react'

export class Assets extends Component  {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render(){
  const { values, handleChange } = this.props;

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-gray-100">

    <div className="p-16">
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
    <form className="w-full max-w-sm mx-auto">
      <div className="">
      <div className="">
      <div className="lab">
        <label className="lab"> Type of Assest </label>
        <input
        type="text"
        name="assets"
        placeholder="eg. properties, assests, accounts, shares"
        onChange={handleChange('assets')}
        defaultvalue={values.assets}
        className="inp"
        />
      </div>
      <div className="contact_form-div">
        <label className="lab"> Beneficiaries </label>
          <select
            name="beneficiary"
            id="dropdown"
            onChange={handleChange('beneficiary')}
            defaultvalue={values.beneficiary}
            className="inp">
            <option value=" "> </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
      </div>
      </div>

      <div className="beneficiary1-container">
      <p className="font-bold mt-2 text-sm">Beneficiary 1 </p>
      <div className="mb-6">
        <label className="lab"> Full Name </label>
        <input
        type="text"
        name="name"
        placeholder=""
        onChange={handleChange('name')}
        defaultvalue={values.name}
        className="inp"
      />
      </div>

      <div className="mb-4">
      <label className="lab"> Email </label>
      <input
        type="email"
        name="email"
        placeholder=""
        onChange={handleChange('email')}
        defaultvalue={values.email}
        className="inp"
      />
    </div>

    <div className="">
    <label className="lab"> Phone Number </label>
    <input
      type="number"
      name="phoneNumber"
      pattern="[+0-9]{15, }"
      onChange={handleChange('phoneNumber')}
      defaultvalue={values.phoneNumber}
      className="inp"
    />
  </div>

  <div className="">
  <label className="lab"> Percentage </label>
  <input
    type="number"
    name="percentage"
    pattern="[0-9]{3, }"
    onChange={handleChange('percentage')}
    defaultvalue={values.percentage}
    className="inp"
    />
    </div>
    </div>

    </div>
    </form>

    </div>
    <div>
    <form className="w-full max-w-sm mx-auto mt-8">
      <div className="">
      <div className="">
      <div className="lab">
        <label className="lab">Asset2: Type of Assest </label>
        <input
        type="text"
        name="assets"
        placeholder="eg. properties, assests, accounts, shares"
        onChange={handleChange('assets')}
        defaultvalue={values.assets}
        className="inp"
        />
      </div>
      <div className="contact_form-div">
        <label className="lab"> Beneficiaries </label>
          <select
            name="beneficiary"
            id="dropdown"
            onChange={handleChange('beneficiary')}
            defaultvalue={values.beneficiary}
            className="inp">
            <option value=" "> </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
      </div>
      </div>

      <div className="beneficiary1-container">
      <p className="font-bold mt-2 text-sm">Beneficiary 1 </p>
      <div className="mb-6">
        <label className="lab"> Full Name </label>
        <input
        type="text"
        name="name"
        placeholder=""
        onChange={handleChange('name')}
        defaultvalue={values.name}
        className="inp"
      />
      </div>

      <div className="mb-4">
      <label className="lab"> Email </label>
      <input
        type="email"
        name="email"
        placeholder=""
        onChange={handleChange('email')}
        defaultvalue={values.email}
        className="inp"
      />
    </div>

    <div className="">
    <label className="lab"> Phone Number </label>
    <input
      type="number"
      name="phoneNumber"
      pattern="[+0-9]{15, }"
      onChange={handleChange('phoneNumber')}
      defaultvalue={values.phoneNumber}
      className="inp"
    />
  </div>

  <div className="">
  <label className="lab"> Percentage </label>
  <input
    type="number"
    name="percentage"
    pattern="[0-9]{3, }"
    onChange={handleChange('percentage')}
    defaultvalue={values.percentage}
    className="inp"
    />
    </div>
    </div>

    </div>
    </form>
    </div>
    <div>
    <form className="w-full max-w-sm mx-auto mt-8">
      <div className="">
      <div className="">
      <div className="lab">
        <label className="lab">Asset3: Type of Assest </label>
        <input
        type="text"
        name="assets"
        placeholder="eg. properties, assests, accounts, shares"
        onChange={handleChange('assets')}
        defaultvalue={values.assets}
        className="inp"
        />
      </div>
      <div className="contact_form-div">
        <label className="lab"> Beneficiaries </label>
          <select
            name="beneficiary"
            id="dropdown"
            onChange={handleChange('beneficiary')}
            defaultvalue={values.beneficiary}
            className="inp">
            <option value=" "> </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
      </div>
      </div>

      <div className="beneficiary1-container">
      <p className="font-bold mt-2 text-sm">Beneficiary 1 </p>
      <div className="mb-6">
        <label className="lab"> Full Name </label>
        <input
        type="text"
        name="name"
        placeholder=""
        onChange={handleChange('name')}
        defaultvalue={values.name}
        className="inp"
      />
      </div>

      <div className="mb-4">
      <label className="lab"> Email </label>
      <input
        type="email"
        name="email"
        placeholder=""
        onChange={handleChange('email')}
        defaultvalue={values.email}
        className="inp"
      />
    </div>

    <div className="">
    <label className="lab"> Phone Number </label>
    <input
      type="number"
      name="phoneNumber"
      pattern="[+0-9]{15, }"
      onChange={handleChange('phoneNumber')}
      defaultvalue={values.phoneNumber}
      className="inp"
    />
  </div>

  <div className="">
  <label className="lab"> Percentage </label>
  <input
    type="number"
    name="percentage"
    pattern="[0-9]{3, }"
    onChange={handleChange('percentage')}
    defaultvalue={values.percentage}
    className="inp"
    />
    </div>
    </div>

    </div>
    </form>
    </div>
    <div>
    <form className="w-full max-w-sm mx-auto mt-8">
      <div className="">
      <div className="">
      <div className="lab">
        <label className="lab">Asset4: Type of Assest </label>
        <input
        type="text"
        name="assets"
        placeholder="eg. properties, assests, accounts, shares"
        onChange={handleChange('assets')}
        defaultvalue={values.assets}
        className="inp"
        />
      </div>
      <div className="contact_form-div">
        <label className="lab"> Beneficiaries </label>
          <select
            name="beneficiary"
            id="dropdown"
            onChange={handleChange('beneficiary')}
            defaultvalue={values.beneficiary}
            className="inp">
            <option value=" "> </option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
          </select>
      </div>
      </div>

      <div className="beneficiary1-container">
      <p className="font-bold mt-2 text-sm">Beneficiary 1 </p>
      <div className="mb-6">
        <label className="lab"> Full Name </label>
        <input
        type="text"
        name="name"
        placeholder=""
        onChange={handleChange('name')}
        defaultvalue={values.name}
        className="inp"
      />
      </div>

      <div className="mb-4">
      <label className="lab"> Email </label>
      <input
        type="email"
        name="email"
        placeholder=""
        onChange={handleChange('email')}
        defaultvalue={values.email}
        className="inp"
      />
    </div>

    <div className="">
    <label className="lab"> Phone Number </label>
    <input
      type="number"
      name="phoneNumber"
      pattern="[+0-9]{15, }"
      onChange={handleChange('phoneNumber')}
      defaultvalue={values.phoneNumber}
      className="inp"
    />
  </div>

  <div className="">
  <label className="lab"> Percentage </label>
  <input
    type="number"
    name="percentage"
    pattern="[0-9]{3, }"
    onChange={handleChange('percentage')}
    defaultvalue={values.percentage}
    className="inp"
    />
    </div>
    </div>

    </div>
    </form>
    </div>

    <div className="mx-6 mt-6 flex flex-row">
        <button
          className="btn w-1/2"
          onClick={this.previous}>Previous</button>

          <button
            className="btn w-1/2"
            onClick={this.continue}>Next</button>
    </div>
    </div>

  )
}
}
export default Assets;
