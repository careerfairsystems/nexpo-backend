import { actionTypes } from '../..';
import API from '../../../API';

export function createStudentSessionApplIsLoading() {
  return {
    type: actionTypes.POST_STUDENT_SESSION_APPL
  };
}

export function createStudentSessionApplSuccess(application) {
  return {
    type: actionTypes.POST_STUDENT_SESSION_APPL_SUCCESS,
    application
  };
}

export type CreateStudentSessionApplFailureAction = {
  type: string
};
export function createStudentSessionApplFailure(): CreateStudentSessionApplFailureAction {
  return {
    type: actionTypes.POST_STUDENT_SESSION_APPL_FAILURE
  };
}

export function createStudentSessionAppl(data) {
  return dispatch => {
    dispatch(createStudentSessionApplIsLoading());
    return API.studentSessions
      .create(data)
      .then(application => {
        dispatch(createStudentSessionApplSuccess(application.data));
      })
      .catch(() => {
        dispatch(createStudentSessionApplFailure());
      });
  };
}