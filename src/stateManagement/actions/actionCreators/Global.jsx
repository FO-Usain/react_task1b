import { UPDATE_VIDEOS_PAGE } from "../actionTypes/Global";

export const updateVideosPage = (videos, page) => {
    return {
        type: UPDATE_VIDEOS_PAGE,
        videos: videos,
        page: page
    };
}

export const showToast = (dispatch, message, timeout = 3000) => {
    dispatch({
        type: "SNACKBAR",
        payload: {
            message,
        },
    });

    setTimeout(() => {
        dispatch({
            type: "SNACKBAR",
            payload: {
                message: "",
            },
        });
    }, timeout);
};