import { Actions } from "../actions/actionCreators";
import { ActionType } from "../actions/actionType"

type State = {
    isLogin: boolean;
};

const initialState: State = {
    isLogin: false,
};

export default (state = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionType.CHANGE_IS_LOGIN:
            return {
                isLogin: true

            };
        case ActionType.CHANGE_NOT_LOGIN:
            return {
                isLogin: false,
            };
        default:
            return state;
    }
};
