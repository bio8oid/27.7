import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


export const addComment = text => {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text: text
    }
}

export const thumbUpComment = commentId => {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
    }
}

export const thumbDownComment = commentId => {
    return {
        type: THUMB_DOWN_COMMENT,
        id: commentId
    }
}
