import React from "react";

import "./Contact.scss";

import Heading from "./../../components/UI/Heading/Heading";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./../../containers/ContactForm/ContactForm";

function Contact(props) {
  return (
    <div className="Contact container">
      <Heading text1="Contact" text2="me" />
      <Heading text1="This is how you can reach me..." type="secondary" />
      <div className="py-5">
        <div className="col-6">
          <ContactInfo
            contactMethod="Phone"
            contactAddress={<a href="tel:+4915168194576">0151 681 94 576</a>}
          />
          <ContactInfo
            contactMethod="Email"
            contactAddress={
              <a href="mailto:thaisondang.bk57@gmail.com">
                thaisondang.bk57@gmail.com
              </a>
            }
          />
          <ContactInfo
            contactMethod="Address"
            contactAddress="Strassmannstr. 41, 10249 Berlin, Germany"
          />
        </div>
        <div className="col-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
