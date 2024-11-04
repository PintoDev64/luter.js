import { useReducer } from "react"
import { TaostContext } from ".."
import functionalReducer from "./reducer"

interface ToastWrapperProps {
    children: React.ReactNode
}

export default function ToastWrapper({ children }: ToastWrapperProps) {
    const Init: LuterJs.ToastElements = []

    const [ToastElements, dispatch] = useReducer(functionalReducer, Init)

    const EditToasts = (data: LuterJs.functionalReducerProps) => {
        dispatch(data)
    }

    return (
        <TaostContext.Provider value={{
            ToastElements,
            EditToasts
        }}>
            {children}
        </TaostContext.Provider>
    )
}