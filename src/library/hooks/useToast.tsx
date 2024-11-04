import { useContext } from "react"
import { TaostContext } from "../context"

export default function useToast() {
    const Context = useContext(TaostContext)

    if (Context == undefined) throw new Error("No se puede usar el contexto fuera de sus limites");

    const { ToastElements, EditToasts } = Context

    interface addToastProps { title: string, description: string }
    const addToast = ({ title, description }: addToastProps) => {
        EditToasts({
            action: 'add',
            data: { title, description },
            index: undefined
        })
    }

    const removeToast = (index: number) => {
        EditToasts({ action: 'remove', index })
    }

    const removeAllToast = () => {
        EditToasts({ action: 'removeall' })
    }

    return {
        addToast,
        removeToast,
        removeAllToast,
        ToastElements
    }
}