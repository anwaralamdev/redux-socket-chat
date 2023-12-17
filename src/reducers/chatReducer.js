// chatReducer.js
import {
  SEND_MESSAGE,
  RECEIVE_MESSAGE,
  DELETE_MESSAGE,
  LIKE_MESSAGE,
} from '../actions/actionTypes';

const initialState = {
  chatHistory: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        chatHistory: [...state.chatHistory, action.payload],
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        chatHistory: [...state.chatHistory, action.payload],
      };
    case DELETE_MESSAGE:
      // Implement delete logic based on action.payload (messageId)
      return state;
    case LIKE_MESSAGE:
      // Implement like logic based on action.payload (messageId)
      return state;
    default:
      return state;
  }
};

export default chatReducer;

