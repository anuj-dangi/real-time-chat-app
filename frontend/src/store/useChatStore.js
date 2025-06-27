import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";
import { Socket } from "socket.io-client";
import { useAuthStore } from "./useAuthStore.js";

//getter, setter for states
export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    SelectedUser: null,
    isUsersLoading: false,
    isMessageLoading: false,

    getUsers: async() => {
        set({ isUsersLoading: true});

        try
        {
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data });
        }
        catch(error)
        {
            toast.error(error.response.data.message);
        }
        finally
        {
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessageLoading: true });
        try
        {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({messages: res.data });
        }
        catch(error)
        {
            toast.error(error.response.data.message);
        }
        finally
        {
            set({ isMessageLoading: false });
        }
    },

    sendMessage: async (messageData) => {
        const  { selectedUser, messages } = get();

        try
        {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, res.data]})
        }
        catch(error)
        {
            toast.error(error.response.data.message);
        }

    },

    subscribeToMessages: () => {
        const { selectedUser }= get();

        if(!selectedUser)   return;

        const socket = useAuthStore.getState().socket;

        socket.on("newMessage", (newMessage) => {
            if(newMessage.senderId !== selectedUser._id)    return;
            
            set({messages: [...get().messages, newMessage]});
        })
    },

    unSubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },

    setSelectedUser: (selectedUser) => set({ selectedUser }),
}));