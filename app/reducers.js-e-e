
import { combineReducers } from 'redux';
import {
  CHILD_MODAL_ADD,
  CHILD_IMAGE_CHANGED,
  CHILD_MODAL_GENDER_CHANGED,
  CHILD_MODAL_NAME_CHANGED,
  DOSE_SELECTED
} from './actions';
import uuid from 'react-native-uuid';

const initialState = {
  babyRecords: {},
  addChildModal: {
    visible: true,
    gender: '',
    name: ''
  }
}

const babyCareReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHILD_MODAL_ADD: {
      const id = uuid.v1();
      const currentBabyRecordId = state.currentBabyRecordId || id;
      const babyRecords = Object.assign({}, state.babyRecords);
      babyRecords[id] = action.babyRecord;
      return Object.assign({}, state, {
        currentBabyRecordId,
        babyRecords,
        addChildModal: {
          visible: false,
          gender: '',
          name: ''
        }
      });
    }

    case CHILD_IMAGE_CHANGED: {
      const babyRecords = Object.assign({}, state.babyRecords);
      babyRecords[state.currentBabyRecordId].imageSource = action.imageSource;

      return Object.assign({}, state, {
        babyRecords
      });
    }

    case CHILD_MODAL_GENDER_CHANGED: {
      return Object.assign({}, state, {
        addChildModal: {
          visible: state.addChildModal.visible,
          gender: action.gender,
          name: state.addChildModal.name
        }
      });
    }

    case DOSE_SELECTED: {
      console.log('DOSE_SELECTED with doseId: ' + action.doseId);
      const babyRecords = Object.assign({}, state.babyRecords);
      const doses = Object.assign({}, babyRecords[state.currentBabyRecordId].doses);
      doses[action.doseId] = !doses[action.doseId];
      babyRecords[state.currentBabyRecordId].doses = doses;

      return Object.assign({}, state, {
        babyRecords
      });
    }

    case CHILD_MODAL_NAME_CHANGED: {
      return Object.assign({}, state, {
        addChildModal: {
          visible: state.addChildModal.visible,
          gender: state.addChildModal.gender,
          name: action.name
        }
      });
    }

    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({babycare: babyCareReducer});

export default rootReducer;
