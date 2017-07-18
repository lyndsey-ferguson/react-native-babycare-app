
import {
  ACTION_SET_DISPLAY,
  ACTION_SELECT_CHILD,
  ACTION_EDIT_CHILDREN,
  ACTION_DELETE_CHILD,
  ACTION_CHANGE_CHILDREN
} from '../actions/ManageChildActions';

const initialState = {
  visible: false,
  isEditing: false,
  babyRecords: {},
  isDirty: false,
  childIdToDelete: undefined,
  childIdToSelect: undefined
}

export default ManageChildModalReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_SET_DISPLAY: {
      return Object.assign({}, state, {
        visible: action.visible,
        babyRecords: action.babyRecords,
        isDirty: false,
        isEditing: false
      });
    }

    case ACTION_SELECT_CHILD: {
      return Object.assign({}, state, {
        childIdToSelect: action.childIdToSelect,
        visible: false
      });
    }

    case ACTION_EDIT_CHILDREN: {
      const visible = action.isEditing;
      return Object.assign({}, state, {
        visible,
        isEditing: action.isEditing
      });
    }

    case ACTION_DELETE_CHILD: {
      const {[action.childIdToDelete]: deletedKey, ...otherKeys} = state.babyRecords;
      return Object.assign({}, state, {
        isDirty: true,
        babyRecords: Object.assign({}, otherKeys)
      });
    }

    case ACTION_CHANGE_CHILDREN: {
      return Object.assign({}, state, {
        isEditing: false,
        visible: false
      });
    }

    default: {
      return state;
    }
  }
}
