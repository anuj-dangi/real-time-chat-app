import React, { useEffect } from 'react';
import { useChatStore } from "../store/useAuthStore.js";

const Sidebar = () => {

  const { getUsers, users, selectedUser, SetSelectedUser, isUsersLoading } = useChatStore();

  const onlineUsers = []; 

  useEffect(() => {
    getUsers()
  }, [getUsers]);

  if(isUsersLoading)  return <SidebarSkeleton />

  return (
    <div>
      Sidebar
    </div>
  );
};

export default Sidebar;
