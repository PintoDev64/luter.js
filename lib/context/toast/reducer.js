export default function functionalReducer(prevState, { action, index, data }) {
    const newState = [...prevState];
    const ActionList = {
        add: function () {
            if (data === undefined)
                throw new Error("Informacion no proporcionada");
            newState.push({ ...data, id: crypto.randomUUID() });
        },
        remove: function () {
            if (index === undefined)
                throw new Error("Posicion del elemento no especificado");
            newState.splice(index, 1);
        },
        removeall: function () {
            newState.length = 0;
        }
    };
    ActionList[action]();
    return newState;
}
