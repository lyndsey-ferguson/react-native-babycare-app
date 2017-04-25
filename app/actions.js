
// actions
export const CHILD_MODAL_ADD = 'CHILD_MODAL_ADD';
export const CHILD_MODAL_GENDER_CHANGED = 'CHILD_MODAL_GENDER_CHANGED';
export const CHILD_MODAL_NAME_CHANGED = 'CHILD_NAME_CHANGED';

export const CHILD_IMAGE_CHANGED = 'CHILD_IMAGE_CHANGED';

// action methods
export const addChild = (babyRecord) => ({ type: CHILD_MODAL_ADD, babyRecord });
export const changeChildImage = (imageSource) => ({ type: CHILD_IMAGE_CHANGED, imageSource })

// add child modal action methods
export const changeGender = (gender) => ({ type: CHILD_MODAL_GENDER_CHANGED, gender });
export const changeName = (name) => ({ type: CHILD_MODAL_NAME_CHANGED, name});
