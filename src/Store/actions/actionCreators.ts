import {
    createAction,
    ActionOfType,
    ActionsUnion
} from "../redux-util/redux-util";
import { ActionType } from "./actionType"

const changeToLogin = () => createAction(ActionType.CHANGE_IS_LOGIN);
const changeToNotLogin = () => createAction(ActionType.CHANGE_NOT_LOGIN);



export const actions = {
    changeToLogin,
    changeToNotLogin,

};


export type Actions = ActionsUnion<typeof actions>;

export type Action<T extends ActionType> = ActionOfType<Actions, T>;
