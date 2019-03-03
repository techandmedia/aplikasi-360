import React from "react";
import { Modal } from "antd";

function ModalDeletion({
  visible,
  handleModalOk,
  handleModalCancel,
  companyID,
  officeID,
  company,
  office
}) {
  const {
    company_name,
    address,
    phone_country_code,
    phone_number,
    revenue
  } = company;
  const { officeName, lat, log, date } = office;
  // console.log(office, company);
  return (
    <div>
      <Modal
        title="Confirm Deletion"
        visible={visible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        {companyID ? (
          <React.Fragment>
            <p className="modal-p">
              You are about to delete company{" "}
              <span style={{ fontWeight: "bold", color: "red" }}>
                {company_name}
              </span>
              .
            </p>
            <p className="modal-p">
              All office records that belong the company will be deleted as
              well.
            </p>{" "}
            <hr />
            <p className="modal-p">Company Name: {company_name}</p>
            <p className="modal-p">Address: {address}</p>
            <p className="modal-p">
              Phone Number: ({phone_country_code}) {phone_number}
            </p>
            <p className="modal-p">Revenue: {revenue}</p>
          </React.Fragment>
        ) : officeID ? (
          <React.Fragment>
            <p className="modal-p">
              You are about to delete office{" "}
              <span style={{ fontWeight: "bold", color: "red" }}>
                {officeName}
              </span>
              .
            </p>
            <hr />
            <p className="modal-p">Company Name: {company_name}</p>
            <p className="modal-p">Office Name: {officeName}</p>
            <p className="modal-p">Location:</p>
            <p className="modal-p">
              latitude: {lat} longitude: {log}
            </p>
            <p className="modal-p">Start Date: {date}</p>
          </React.Fragment>
        ) : null}
      </Modal>
    </div>
  );
}

export default ModalDeletion;
