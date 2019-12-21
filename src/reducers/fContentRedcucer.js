import {
    SET_FEATURED_CONTENT
} from '../actions/types';

const INITIAL_STATE = {
    featuredContent: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_FEATURED_CONTENT:
            const featuredContent = action.payload;
            return {
                ...state,
                featuredContent
            }
            default: return state;
    }
}