import { useContext } from "react";
import { TaostContext } from "../context";
export default function useToast() {
    const Context = useContext(TaostContext);
    if (Context == undefined)
        throw new Error("No se puede usar el contexto fuera de sus limites");
    const { ToastElements, EditToasts } = Context;
    const ToastCount = ToastElements.length;
    const addToast = ({ title, description }) => {
        EditToasts({
            action: 'add',
            data: { title, description },
            index: undefined
        });
    };
    const removeToast = (index) => {
        EditToasts({ action: 'remove', index });
    };
    const removeAllToast = () => {
        EditToasts({ action: 'removeall' });
    };
    return {
        addToast,
        removeToast,
        removeAllToast,
        ToastCount,
        ToastElements
    };
}
