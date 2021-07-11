import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as modalAction from './modalAction';

type ModalAction = ActionType<typeof modalAction>;

const initialState: State = {
  modals: [],
};

export default combineReducers<State, ModalAction>({
  modals: (state = initialState.modals, action) => {
    switch (action.type) {
      case '@modal/open':
        return [action.payload].concat(state);
      case '@modal/close':
        return state.slice(0, -1);
      default:
        return state;
    }
  },
});
