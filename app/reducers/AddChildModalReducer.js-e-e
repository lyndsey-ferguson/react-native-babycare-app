import {
  ACTION_SET_DISPLAY,
  ACTION_ADD_CHILD,
  ACTION_CHANGE_NAME,
  ACTION_CHANGE_GENDER
} from '../actions/AddChildActions'

const initialState = {
  visible: true,
  allowCancel: false,
  gender: '',
  name: ''
};

export default AddChildModalReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_ADD_CHILD: {
      return Object.assign({}, state, {
        visible: false,
        name: '',
        gender: ''
      });
    }

    case ACTION_SET_DISPLAY: {
      return Object.assign({}, state, {
        visible: action.visible,
        allowCancel: action.allowCancel
      });
    }

    case ACTION_CHANGE_GENDER: {
      return Object.assign({}, state, {
        gender: action.gender
      });
    }

    case ACTION_CHANGE_NAME: {
      return Object.assign({}, state, {
        name: action.name
      });
    }

    default: {
      return state;
    }
  }
}
