import { createContext } from "react";

// Types
import { LuterJs } from "../types";

export const TaostContext = createContext<LuterJs.ToastContext | null>(null)