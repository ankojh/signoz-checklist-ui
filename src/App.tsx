import { createContext, useState } from "react";
import "./App.css";
import { ChecklistContainer } from "./components/ChecklistContainer";

const MOCK_DATA = {
  "checklist-invite-user": {
    title: "Invite User",
    description: "Invite user to do",
    items: [
      {
        id: "invite_user",
        isDone: false,
        title: "Invite User",
        description: "Description",
      },
      {
        id: "invite_admin",
        isDone: false,
        title: "Invite Admin",
        description: "Description",
      },
      // {
      //   id: "redirect-to-invite-user-page",
      //   isDone: false,
      //   title: "Add 2fa2",
      //   description: "2FA2",
      // },
    ],
  },
};

export const DataContext = createContext({
  data: null,
  setData: () => {},
});

function App() {
  const [data, setData] = useState(MOCK_DATA["checklist-invite-user"]);

  return (
    <div className="text-white">
      <DataContext.Provider
        value={{
          data,
          setData,
        }}
      >
        <ChecklistContainer data={data} />
      </DataContext.Provider>
    </div>
  );
}

export default App;
