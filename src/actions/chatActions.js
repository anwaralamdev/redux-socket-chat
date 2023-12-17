// chatActions.js
import {
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
  DELETE_MESSAGE,
  LIKE_MESSAGE,
} from './actionTypes';

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  payload: message,
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  payload: messageId,
});

export const likeMessage = (messageId) => ({
  type: LIKE_MESSAGE,
  payload: messageId,
});

