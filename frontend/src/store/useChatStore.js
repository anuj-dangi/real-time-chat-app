import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios.js";

export default useChatStore = create((set) => ({
    message: [],
    users: [],
    SelectedUser: null,
    isUsersLoading: false,
    isMessageLoading: false,

    getUser: async() => {
        set({ isUsersLoading: true});

        try
        {
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data });
        }
        catch(error)
        
    }
}));