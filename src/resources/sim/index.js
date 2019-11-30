import { identity } from "./attrs";
import SimList from "./components/SimList";
import SimCreate from "./components/create/SimCreate";

export default {
  ...identity,
  list: SimList,
  create: SimCreate
};
