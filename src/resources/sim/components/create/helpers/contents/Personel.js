import React, { Fragment } from "react";
import { NumberInput, TextInput } from "react-admin";
import { fields } from "../../../../attrs";

const Personel = ({ ...rest }) => {
  return (
    <Fragment>
      <NumberInput {...fields.no_identitas} {...rest} />
      <TextInput {...fields.nama} {...rest} />
    </Fragment>
  );
};

export default Personel;
