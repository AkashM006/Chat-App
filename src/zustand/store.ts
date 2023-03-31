import { create } from "zustand";
import createSocketSlice, { SocketState } from "./SocketSlice";
import createUserSlice, { UserState } from "./UserSlice";
import createThemeSlice, { ThemeState } from "./ThemeSlice";

export type State = {
    socket: SocketState,
    user: UserState,
    theme: ThemeState
}

const useStore = create<State>((...a) => ({
    socket: { ...createSocketSlice(...a) },
    user: { ...createUserSlice(...a) },
    theme: { ...createThemeSlice(...a) }
}))

export default useStore