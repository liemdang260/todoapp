const initState = {
    search: "",
    status: 'All',
    priorities: []

}

const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'filter/searchfilterChange':
            return {
                ...state,
                search: action.payload
            }

        case 'filter/statusFilterChange':
            return {
                ...state,
                status: action.payload
            }
        case 'filter/priorityFilterChange':
            return {
                ...state,
                priorities: action.payload
            }


        default:
            return state
    }
}

export default filterReducer