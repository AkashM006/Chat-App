import { Socket } from "socket.io-client";
import { State } from "./store";
import { StateCreator } from "zustand";

export type SocketState = {
    setSocketObject: (current: SocketObject) => void
} & SocketObject

export type SocketObject = {
    socket: Socket | undefined,
    id: string,
}

const createSocketSlice: StateCreator<State, [], [], SocketState> = (set) => ({
    id: '',
    socket: undefined,
    setSocketObject: (current: SocketObject) => set((state: State) => ({
        ...state,
        socket: {
            ...state.socket,
            ...current,
        }
    }))
})

export default createSocketSlice