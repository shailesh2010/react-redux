import * as actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';

export const createCourse = (course) => {
  return {type: actionTypes.CREATE_COURSE, course};
};

export const loadCoursesSuccess = (courses) => {
  return {type: actionTypes.LOAD_COURSES_SUCCESS, courses};
};


export const loadCourses = () => {
  return ((dispatch) => {
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  });
};
