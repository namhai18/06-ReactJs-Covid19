import * as ActionType from './type';

const initialState = {
    infectedList: [],
};

const covid19ViewReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionType.GET_ALL_COVID_SUMMARY:
            // return all list priority
            
            state.infectedList = action.data;
            return { ...state };
        default:
            return { ...state };
    }

}

export default covid19ViewReducer;