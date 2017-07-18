
import {
  ACTION_SET_DISPLAY,
  ACTION_SELECT_CHILD,
  ACTION_EDIT_CHILDREN,
  ACTION_DELETE_CHILD,
  ACTION_CHANGE_CHILDREN
} from './ManageChildActions';

export const SetDisplay = (visible, babyRecords) => ({
  type: ACTION_SET_DISPLAY,
  visible,
  babyRecords : Object.assign({}, babyRecords)
});

export const SelectChild = (childIdToSelect) => ({
  type: ACTION_SELECT_CHILD,
  childIdToSelect
});

export const EditChildren = (isEditing) => ({
  type: ACTION_EDIT_CHILDREN,
  isEditing
});

export const DeleteChild = (childIdToDelete) => ({
  type: ACTION_DELETE_CHILD,
  childIdToDelete
});

export const ChangeChildren = (babyRecords) => ({
  type: ACTION_CHANGE_CHILDREN,
  babyRecords
});
