import * as actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export const loadAuthorsSuccess = (authors) => {
  return {type: actionTypes.LOAD_AUTHORS_SUCCESS, authors};
};


export const loadAuthors = () => {
  return dispatch => {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw (error);
    });
  };
};
