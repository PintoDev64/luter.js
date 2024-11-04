export default function functionalReducer(prevState: LuterJs.ToastElements, { action, index, data }: LuterJs.functionalReducerProps): LuterJs.ToastElements {
    const newState = [...prevState]

    const ActionList: Record<
        LuterJs.functionalReducerProps['action'],
        () => void> = {
        add: function (): void {
            if (data === undefined) throw new Error("Informacion no proporcionada");
            newState.push(data)
        },
        remove: function (): void {
            if (index === undefined) throw new Error("Posicion del elemento no especificado");
            newState.splice(index, 1)
        },
        removeall: function (): void {
            newState.length = 0
        }
    }

    ActionList[action]()

    return newState
}