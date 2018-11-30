import React from "react";

import "./Contact.scss";

import Heading from "./../../components/UI/Heading/Heading";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./../../containers/ContactForm/ContactForm";

const contactMethods = [
  {
    method: "Phone",
    address: <a href="tel:+4915168194576">0151 681 94 576</a>
  },
  {
    method: "Email",
    address: (
      <a href="mailto:thaisondang.bk57@gmail.com">thaisondang.bk57@gmail.com</a>
    )
  },
  {
    method: "Address",
    address: "Strassmannstr. 41, 10249 Berlin, Germany"
  }
];

function Contact(props) {
  const contacts = contactMethods.map(method => (
    <ContactInfo
      key={method.method}
      contactMethod={method.method}
      contactAddress={method.address}
    />
  ));

  return (
    <div className="Contact container">
      <Heading text1="Contact" text2="me" />
      <Heading text1="This is how you can reach me..." type="secondary" />
      <div className="row">
        <div className="col-6 col-md-12 py-3">{contacts}</div>
        <div className="col-6 col-md-12 py-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
