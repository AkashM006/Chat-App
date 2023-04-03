import { create } from "zustand";
import createSocketSlice, { SocketState } from "./SocketSlice";
import createUserSlice, { UserState } from "./UserSlice";
import createThemeSlice, { ThemeState } from "./ThemeSlice";
import { persist } from 'zustand/middleware'

export type State = {
    socket: SocketState,
    user: UserState,
    theme: ThemeState,
}

const useStore = create<State, [['zustand/persist', 'State']]>(
    persist(
        (...a) => ({
            socket: { ...createSocketSlice(...a) },
            user: { ...createUserSlice(...a) },
            theme: { ...createThemeSlice(...a) },

        }),
        {
            name: 'my-app-store',
        }
    )
)

export default useStore