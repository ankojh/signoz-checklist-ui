export function InviteAdminButton() {
  const handleAction = () => {
    //replacing endpoint - BE will updated
    console.log("inviting admin");
    //refetch()
  };
  return <button onClick={handleAction}>Invite Admin</button>;
}
