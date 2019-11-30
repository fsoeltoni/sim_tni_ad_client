import React from "react";
import { List, Datagrid } from "react-admin";
import { components, fields } from "../attrs";
import { TextField } from "@material-ui/core";

const SimList = ({ ...rest }) => (
  <List {...rest} {...components.list}>
    <Datagrid>
      <TextField {...fields.id} />
    </Datagrid>
  </List>
);

export default SimList;
