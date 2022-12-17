import { IAppCard } from "./Context.interfaces";

export interface IModalEdit {
  isOpen: boolean;
  onClose: () => void;
  applicationStatus: {
    id: string;
    status: string;
  };
  applicationTitle: string;
  applicationOrg: string;
}
