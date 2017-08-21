import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const createCourse = (course) => {
  return {type: actionTypes.CREATE_COURSE, course};
};

export const loadCoursesSuccess = (courses) => {
  return {type: actionTypes.LOAD_COURSES_SUCCESS, courses};
};


export const loadCourses = () => {
  return ((dispatch) => {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  });
};

export const updateCourseSuccess = (course) => {
  return {type: actionTypes.UPDATE_COURSE_SUCCESS, course};
};

export const createCourseSuccess = (course) => {
  return {type: actionTypes.CREATE_COURSES_SUCCESS, course};
};

export const saveCourse = (course) => {
  return function (dispatch,getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(course)) :
        dispatch(createCourseSuccess(savedCourse));
    })
    .catch(error => {
      dispatch(ajaxCallError());
      throw (error);
    });
  };
};
