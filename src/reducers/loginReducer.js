const loginReducer = (state = [], action)
{
    if (action.type === 'LOGIN') {
        return [...state,
            action.payload
        ];
    }
    return state;
}