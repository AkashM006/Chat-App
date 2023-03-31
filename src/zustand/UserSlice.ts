import { StateCreator } from "zustand";
import { State } from "./store";

export type UserState = { setUser: (user: User) => void } & User

export type User = {
    _id: string,
    email: string,
    name: string,
    picture: string,
    token: string,
}

const createUserSlice: StateCreator<State, [], [], UserState> = (set) => ({
    _id: '',
    email: '',
    name: '',
    picture: '',
    token: '',
    setUser: (user: User) => set((state: State) => ({
        ...state,
        user: {
            ...state.user,
            ...user
        }
    })),
})

export default createUserSlice