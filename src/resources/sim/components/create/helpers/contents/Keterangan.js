import React, { Fragment } from "react";
import { DateInput } from "react-admin";
import { fields } from "../../../../attrs";

const Keterangan = ({ ...rest }) => {
  return (
    <Fragment>
      <DateInput {...fields.created} {...rest} disabled />
      <DateInput {...fields.berlaku_hingga} {...rest} disabled />
    </Fragment>
  );
};

export default Keterangan;
