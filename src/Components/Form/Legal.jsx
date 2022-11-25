import React, {useState} from 'react'
import { Link } from 'react-router-dom';



const Legal = () => {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  const handleNameInputChange = (event) => {
    setContactInfo({...contactInfo, name: event.target.value})
  }
  const handleEmailInputChange = (event) => {
    setContactInfo({...contactInfo, email: event.target.value})
  }
  const handlePhoneNumberInputChange = (event) => {
    setContactInfo({...contactInfo, phoneNumber: event.target.value})
  }
  const handleAddressInputChange = (event) => {
    setContactInfo({...contactInfo, address: event.target.value})
  }

  return (
    <div className="bg-gray-200">
      <div className="executer-container p-16">
      <div>
        <h2>Who will be your Will executor</h2>
        <p>An Executor is a legally appointed person choosen by you, responsible for successfully fullfiling the wishes of your Will.
          An Executor must be above 18 years, of sound mind and free of debt. You should obtaion the consent of your Executor before
          appointment, to avoid a solution where he is unwilling to act as the Executorof your Will. An Executor can also be a Will
          beneficiary.
        </p>
        </div>
        <form className="w-full max-w-sm">
          <div className="lab">
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
          <label className="lab"> Home Address </label>
          <textarea
          type="text"
          name="address"
          placeholder=""
          onChange={handleAddressInputChange}
          value={contactInfo.address}
          className="inp"
        />
        </div>
        </div>
        </form>

        <div>
          <p>
            While, not required by law, our genrator requires you appoint an alternate Executor for emergencies
            or situations where the main Executor is unable to carry out his duties. Your alternative Executor
            will stand in as the main Executor of your Will.
          </p>

          <form className="w-full max-w-sm">
            <div className="lab">
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
            <label className="lab"> Home Address </label>
            <textarea
            type="text"
            name="address"
            placeholder=""
            onChange={handleAddressInputChange}
            value={contactInfo.address}
            className="inp"
          />
          </div>
          </div>
          </form>
        </div>

        <div>
          <p>
            In a case, where you have children below 18 years, a legal guardian should be appointed for their
            responsibilities (care, welfare and education) until they reach 18 years.
            <br />
            <span className="font-bold text-xs">(if applicable)</span>
          </p>

          <form className="w-full max-w-sm">
            <div className="lab">
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
            <label className="lab"> Home Address </label>
            <textarea
            type="text"
            name="address"
            placeholder=""
            onChange={handleAddressInputChange}
            value={contactInfo.address}
            className="inp"
          />
          </div>
          </div>
          </form>
        </div>
        <div className="">
            <Link to="/About">
              <button className="btn_2">Previous</button>
            </Link>
            <Link to="/Assets">
                <button className="btn_2">Next</button>
             </Link>
        </div>
      </div>
    </div>
  )
}

export default Legal;
