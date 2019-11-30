import React from "react";
import Keterangan from "./contents/Keterangan";
import Personel from "./contents/Personel";
import PasFoto from "./contents/PasFoto";

const StepContents = ({ stepIndex }) => {
  switch (stepIndex) {
    case 0:
      return <Keterangan />;
    case 1:
      return <Personel />;
    case 2:
      return <PasFoto />;
    case 3:
      return "Tiga";
    case 4:
      return "Empat";
    default:
      return "Unknown stepIndex";
  }
};

export default StepContents;
