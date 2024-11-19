//checklist actions

import { InviteAdminButton } from "../components/checklist-ui/InviteAdminButton";
import { InviteUserButton } from "../components/checklist-ui/InviteUserButton";

//agreed with BE
//enum
enum ChecklistActions {
  InviteUser = "invite_user",
  InviteAdmin = "invite_admin",
}

export const getChecklistUI = (action: ChecklistActions) => {
  switch (action) {
    case ChecklistActions.InviteAdmin:
      return <InviteUserButton id={action} />;
    case ChecklistActions.InviteUser:
      return <InviteAdminButton />;
    default:
      return null;
  }
};
