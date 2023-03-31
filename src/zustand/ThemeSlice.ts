import { StateCreator } from "zustand"
import { State } from "./store"

export type ThemeState = {
    setMode: (mode: 'light' | 'dark') => void
} & ThemeMode

export type ThemeMode = {
    mode: 'light' | 'dark'
}

const createThemeSlice: StateCreator<State, [], [], ThemeState> = (set) => ({
    mode: 'light',
    setMode: (mode: 'light' | 'dark') => set((state: State) => ({
        ...state,
        theme: {
            ...state.theme,
            mode,
        }
    }))
})

export default createThemeSlice