
import { combineReducers } from 'redux';
import {
  CHILD_MODAL_ADD,
  CHILD_IMAGE_CHANGED,
  CHILD_MODAL_GENDER_CHANGED,
  CHILD_MODAL_NAME_CHANGED,
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

console.log('uuid? ' + uuid.v1());

const babyCareReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHILD_MODAL_ADD: {
      console.log('CHILD_MODAL_ADD called');
      const id = uuid.v1();
      const currentBabyRecordId = state.currentBabyRecordId || id;
      const babyRecords = Object.assign({}, state.babyRecords);
      babyRecords[id] = action.babyRecord;
      console.log('babyRecords: ' + JSON.stringify(babyRecords));
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
      console.log('CHILD_IMAGE_CHANGED called');
      const babyRecords = Object.assign({}, state.babyRecords);
      babyRecords[state.currentBabyRecordId].imageSource = action.imageSource;

      return Object.assign({}, state, {
        babyRecords
      });
    }

    case CHILD_MODAL_GENDER_CHANGED: {
      console.log('CHILD_MODAL_GENDER_CHANGED called');
      return Object.assign({}, state, {
        addChildModal: {
          visible: state.addChildModal.visible,
          gender: action.gender,
          name: state.addChildModal.name
        }
      });
    }

    case CHILD_MODAL_NAME_CHANGED: {
      console.log('CHILD_MODAL_NAME_CHANGED called');
      return Object.assign({}, state, {
        addChildModal: {
          visible: state.addChildModal.visible,
          gender: state.addChildModal.gender,
          name: action.name
        }
      });
    }

    default: {
      console.log('I know not what to do');
      return state;
    }
  }
};

const rootReducer = combineReducers({babycare: babyCareReducer});

export default rootReducer;
