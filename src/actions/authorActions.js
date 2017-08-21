import * as actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusActions';

export const loadAuthorsSuccess = (authors) => {
  return {type: actionTypes.LOAD_AUTHORS_SUCCESS, authors};
};


export const loadAuthors = () => {
  return dispatch => {
    dispatch(beginAjaxCall());
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw (error);
    });
  };
};
