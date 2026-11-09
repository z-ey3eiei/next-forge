import { Toolbar as BaseHubToolbar } from "basehub/next-toolbar";
import { keys } from "../keys";

export const Toolbar = () => {
  if (!keys().BASEHUB_TOKEN) {
    return null;
  }

  return <BaseHubToolbar />;
};
