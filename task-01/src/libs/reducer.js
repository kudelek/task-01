export function reducer(state, action) {
    switch (action.type) {
        case "fieldChange": {
            const newState = { ...state, [String(action.payload.name)]: String(action.payload.value) }
            return newState;
        }

        case "setData": {
            const newState = action.payload;
            return newState;
        }

        default: {
            return state;
        }
    }
}