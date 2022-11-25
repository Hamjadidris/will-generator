import React from "react";
import "./will.css";
import Download from "./Download";
const Will = () => {
  return (
    <div className="will-container">
      <div className="will" id="will">
        <header>
          <h1>
            LAST  WILL  AND  TESTAMENT
            <br />
            of Hamjad
          </h1>
        </header>
        <section>
          <p>
            I, {"HMAJ 123334 of 19 ANITE RESENT (“Testator”)"}, of sound mind,
            memory and body do hereby voluntarily revoke all former wills,
            codicils and testamentary dispositions made by me and DECLARE this
            to be my LAST WILL AND TESTAMENT (“Will”) for proper distribution of
            my immovable and movable assets (“Assets”).
          </p>

          <p>
            I APPOINT {"HAMJA 12344"} to be the sole Executor of my Will and
            Trustee of my Assets (“Executor and Trustee”) to carry out the
            instructions in this Will. If he dies before me or is unable,
            incapable or unwilling to carry out his duties, then I APPOINT{" "}
            {"HAMJA 12334"} to be the Executor and Trustee of this Will.
          </p>
        </section>
        <section>
          <p>
            I DIRECT my Executor and Trustee to apply my Assets towards the
            payment of my funeral and testamentary expenses, debts (if any),
            medical expenses (if any), and all administration expenses payable
            on or by reason of my death.
          </p>
          <p>
            I GRANT my Digital Executor and Trustee the power to access and
            administer my Digital Accounts and Digital Assets therein in
            accordance with my wishes as well as to manage, close and control my
            Digital Accounts. As used in this Will, “Digital Asset” means an
            electronic record in which I have a right or interest whereas
            “Digital Account” means an electronic system for creating,
            generating, sending, receiving, storing, displaying or processing
            electronic information that provides access to a Digital Assest
          </p>

          <p>
            If my spouse dies before me, I APPOINT NHA (12334) (“Guardian”) to
            be the legal guardian of my child/children. In carrying out and
            discharging his duties as the legal guardian of my children, the
            Guardian shall act with the paramount interest and welfare of my
            child/children in mind.
          </p>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </div>
      <Download rootElementId={"will"} downloadFileName={"test"} />
    </div>
  );
};

export default Will;
