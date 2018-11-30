import React from "react";

import "./ContactInfo.scss";

export default function ContactInfo(props) {
  const { contactAddress, contactMethod } = props;

  return (
    <div className="ContactInfo">
      <b>{contactMethod}</b> : <span>{contactAddress}</span>
    </div>
  );
}
