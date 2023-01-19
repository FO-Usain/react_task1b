import { OPEN_SIDEBAR, SETPATH, SNACKBAR, UPDATE_VIDEOS_PAGE } from "../actions/actionTypes/Global";

export const globalInitialState = {
    globalMessage: "",
    isOpen: true,
    path: "",
    videos: [],
    videosPage: 1
};

const globalReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_VIDEOS_PAGE:
            return {
                ...state,
                videos: action.videos,
                videosPage: action.page
            }
        case SNACKBAR:
            return {
                ...state,
                globalMessage: action.payload.message,
            };
        case SETPATH:
            return {
                ...state,
                path: action.payload.path,
            };
        case OPEN_SIDEBAR:
            return {
                ...state,
                isOpen: action.payload.isOpen,
            };

        default:
            return state;
    }
};

export default globalReducer;