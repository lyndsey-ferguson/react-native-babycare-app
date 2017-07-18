
import { combineReducers } from 'redux';
import {
  CHILD_IMAGE_CHANGED,
  DOSE_SELECTED,
} from './actions';
import {
  ACTION_ADD_CHILD
} from './actions/AddChildActions';
import {
  ACTION_CHANGE_CHILDREN,
  ACTION_SELECT_CHILD
} from './actions/ManageChildActions';
import uuid from 'react-native-uuid';
import AddChildModalReducer from './reducers/AddChildModalReducer';
import ManageChildModalReducer from './reducers/ManageChildModalReducer';

const initialState = {
  currentBabyRecordId: undefined,
  babyRecords: {}
}

const babyCareReducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_ADD_CHILD: {
      const id = uuid.v1();
      const currentBabyRecordId = state.currentBabyRecordId || id;
      const babyRecords = Object.assign({}, state.babyRecords);
      babyRecords[id] = action.child;
      babyRecords[id].selectedDoses = {};
      return Object.assign({}, state, {
        currentBabyRecordId,
        babyRecords
      });
    }

    case CHILD_IMAGE_CHANGED: {
      const babyRecords = Object.assign({}, state.babyRecords);
      babyRecords[state.currentBabyRecordId].imageSource = action.imageSource;

      return Object.assign({}, state, {
        babyRecords
      });
    }

    case DOSE_SELECTED: {
      const babyRecords = Object.assign({}, state.babyRecords);
      const selectedDoses = Object.assign({}, babyRecords[state.currentBabyRecordId].selectedDoses);
      selectedDoses[action.doseId] = selectedDoses[action.doseId] ? undefined : new Date().toDateString();
      babyRecords[state.currentBabyRecordId].selectedDoses = selectedDoses;

      return Object.assign({}, state, {
        babyRecords
      });
    }

    case ACTION_SELECT_CHILD: {
      return Object.assign({}, state, {
        currentBabyRecordId: action.childIdToSelect
      });
    }

    case ACTION_CHANGE_CHILDREN: {
      const currentBabyRecordId = state.currentBabyRecordId in action.babyRecords ?
        state.currentBabyRecordId :
        Object.keys(action.babyRecords)[0];

      return Object.assign({}, state, {
        babyRecords: action.babyRecords,
        currentBabyRecordId
      })
    }

    default: {
      return state;
    }
  }
};

export default combineReducers({
  babycare: babyCareReducer,
  addChildModal : AddChildModalReducer,
  manageChildModal: ManageChildModalReducer
});
