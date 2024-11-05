import { jsx as _jsx } from "react/jsx-runtime";
import { useReducer } from "react";
import { TaostContext } from "..";
import functionalReducer from "./reducer";
export default function ToastWrapper({ children }) {
    const Init = [];
    const [ToastElements, dispatch] = useReducer(functionalReducer, Init);
    const EditToasts = (data) => {
        dispatch(data);
    };
    return (_jsx(TaostContext.Provider, { value: {
            ToastElements,
            EditToasts
        }, children: children }));
}
