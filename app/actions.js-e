
// actions
export const ADD_CHILD_MODAL_DISPLAY = 'ADD_CHILD_MODAL_DISPLAY';
export const CHILD_MODAL_ADD = 'CHILD_MODAL_ADD';
export const CHILD_MODAL_GENDER_CHANGED = 'CHILD_MODAL_GENDER_CHANGED';
export const CHILD_MODAL_NAME_CHANGED = 'CHILD_NAME_CHANGED';

export const CHILD_IMAGE_CHANGED = 'CHILD_IMAGE_CHANGED';
export const DOSE_SELECTED = 'DOSE_SELECTED';

export const SELECT_CHILD_MODAL_DISPLAY = 'SELECT_CHILD_MODAL_DISPLAY';
export const SELECT_CHILD_MODAL_CHILD_SELECTED = 'SELECT_CHILD_MODAL_CHILD_SELECTED';
export const SELECT_CHILD_MODAL_CHILD_CHANGED = 'SELECT_CHILD_MODAL_CHILD_CHANGED';

// action methods
export const setAddChildModalVisibility = (visibility) => ({ type: ADD_CHILD_MODAL_DISPLAY, visibility });
export const addChild = (babyRecord) => ({ type: CHILD_MODAL_ADD, babyRecord });
export const changeChildImage = (imageSource) => ({ type: CHILD_IMAGE_CHANGED, imageSource });
export const doseTapped = (doseId) => ({ type: DOSE_SELECTED, doseId });

export const setSelectChildModalVisibility = (visibility) => ({ type: SELECT_CHILD_MODAL_DISPLAY, visibility });
export const childSelected = (selectedId) => ({ type: SELECT_CHILD_MODAL_CHILD_SELECTED, selectedId})
export const childChanged = (childId) => ({ type: SELECT_CHILD_MODAL_CHILD_CHANGED, childId})

// add child modal action methods
export const changeGender = (gender) => ({ type: CHILD_MODAL_GENDER_CHANGED, gender });
export const changeName = (name) => ({ type: CHILD_MODAL_NAME_CHANGED, name});
