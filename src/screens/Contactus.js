import React from "react";
import Layout from "../components/Layout";

export default function Contactus() {
  return (
    <Layout>
      <div className="contact-us-heading">Contact Us</div>
      <div className="contact-us-container container">
        <div className="form-container row my-3">
          <div className="col-lg-6 col-md-6 col-12">
            <div className=" ">
              <div className="form-label">Your Name *</div>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className=" ">
              <div className="form-label">Your Email *</div>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className=" ">
              <div className="form-label">Your Number *</div>
              <input type="number" name="" id="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className=" ">
              <div className="form-label">Your Website </div>
              <input type="number" name="" id="" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-label">Your Message*</div>
            <textarea name="" id="" cols="25" rows="5"></textarea>
          </div>
          <div
            className=""
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              margin: "1rem 0",
            }}
          >
            <div className="button">Send Inquiry</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
