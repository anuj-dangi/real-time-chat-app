import React, { useEffect } from 'react';
import { useChatStore } from "../store/useChatStore.js";
import SidebarSkeleton from './skeletons/SidebarSkeleton.jsx';

const Sidebar = () => {

  const { getUsers, users, selectedUser, SetSelectedUser, isUsersLoading } = useChatStore();

  const onlineUsers = []; 

  useEffect(() => {
    getUsers()
  }, [getUsers]);

  if(isUsersLoading)  return <SidebarSkeleton />

  return (
    <aside className='h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200'>

    </aside>
  );
};

export default Sidebar;
