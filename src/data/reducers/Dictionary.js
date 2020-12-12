const initialState = {
    totalItems: 0,
    dictionary: []
}

export const DictionaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            return { ...state, totalItems: action.totalItems, dictionary: action.result }

        case "UPDATE_DATA":
            const total = state.totalItems + action.totalItems;
            const data = [...state.dictionary, action.result];
            return { ...state, totalItems: total, dictionary: data }

        default:
            return { ...state }
    }
}