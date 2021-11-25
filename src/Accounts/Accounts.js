import React from "react";
import "./Accounts.css";
import Button from "../Components/Buttons/Button";

const Accounts = ({ accounts }) => {
  return (
    <div className="accounts-container">
      <h3>Accounts</h3>
      <div className="accounts">
        {accounts.map((account) => {
          return (
            <div>
              <span style={{ fontWeight: "bold", fontSize: "14px" }}>
                {account.institute}
              </span>
              <div>
                {account.accounts.map((accName) => {
                  return (
                    <div className="accounts-accounts">
                      <span className="accounts-checkbox">
                        <input type="checkbox" />
                      </span>
                      <span>{accName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "10px", paddingLeft: "50px" }}>
        <Button
          height="35px"
          width="168px"
          backgroundColor="white"
          textColor="black"
          text="+ Add Accounts"
        />
      </div>
    </div>
  );
};

export default Accounts;
