import { Pump, type PumpProps, type PumpQuery } from "basehub/react-pump";
import { keys } from "../keys";

export const Feed = <Queries extends PumpQuery[], Bind = undefined>(
  props: PumpProps<Queries, Bind>
) => {
  if (!keys().BASEHUB_TOKEN) {
    return null;
  }

  return <Pump {...props} />;
};
