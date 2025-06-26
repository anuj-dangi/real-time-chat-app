import React, { useEffect} from 'react'
import { useChatStore } from '../store/useChatStore.js';

const ChatContainer = () => {

  const { messages, getMessages, isMessageLoading, selectedUser } = useChatStore();

  useEffect(() => {
    gerMessage(selectedUser._id)
  }, [selectedUser._id, getMessages]);

  if(isMessageLoading)  return <div>Loading...</div>

  return (
    <div className='flex-1 flex flex-col overflow-auto'>
      <ChatHeader />

      <p>messages...</p>

      <MessageInput />
      
    </div>
  )
};

export default ChatContainer;
