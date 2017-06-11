
import { combineReducers } from 'redux';
import {
  CHILD_MODAL_ADD,
  CHILD_IMAGE_CHANGED,
  CHILD_MODAL_GENDER_CHANGED,
  CHILD_MODAL_NAME_CHANGED,
  DOSE_SELECTED,
  ADD_CHILD_MODAL_DISPLAY,
  SELECT_CHILD_MODAL_DISPLAY,
  SELECT_CHILD_MODAL_CHILD_SELECTED,
  SELECT_CHILD_MODAL_CHILD_CHANGED
} from './actions';
import uuid from 'react-native-uuid';

const initialState = {
  currentBabyRecordId: undefined,
  babyRecords: {},
  addChildModal: {
    visible: true,
    allowCancel: false,
    gender: '',
    name: ''
  },
  selectChildModal: {
    visible: false,
    selectedId: -1
  }
}

const babyCareReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHILD_MODAL_ADD: {
      const id = uuid.v1();
      const currentBabyRecordId = state.currentBabyRecordId || id;
      const babyRecords = Object.assign({}, state.babyRecords);
      babyRecords[id] = action.babyRecord;
      babyRecords[id].selectedDoses = {};
      return Object.assign({}, state, {
        currentBabyRecordId,
        babyRecords,
        addChildModal: {
          visible: false,
          allowCancel: false,
          gender: '',
          name: ''
        }
      });
    }

    case ADD_CHILD_MODAL_DISPLAY: {
      return Object.assign({}, state, {
        addChildModal: {
          visible: action.visibility,
          allowCancel: true,
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
          allowCancel: state.addChildModal.allowCancel,
          gender: action.gender,
          name: state.addChildModal.name
        }
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

    case CHILD_MODAL_NAME_CHANGED: {
      return Object.assign({}, state, {
        addChildModal: {
          visible: state.addChildModal.visible,
          allowCancel: state.addChildModal.allowCancel,
          gender: state.addChildModal.gender,
          name: action.name
        }
      });
    }

    case SELECT_CHILD_MODAL_DISPLAY: {
      return Object.assign({}, state, {
        selectChildModal: {
          visible: action.visibility
        }
      });
    }

    case SELECT_CHILD_MODAL_CHILD_SELECTED: {
      return Object.assign({}, state, {
        selectChildModal: {
          visible: state.selectChildModal.visible,
          selectedId: action.selectedId
        }
      });
    }

    case SELECT_CHILD_MODAL_CHILD_CHANGED: {
      return Object.assign({}, state, {
        selectChildModal: {
          visible: false,
          selectedId: -1
        },
        currentBabyRecordId: action.childId
      });
    }

    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({babycare: babyCareReducer});

export default rootReducer;
