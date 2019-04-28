import * as ActionTypes from "./ActionTypes";

var initialState = {
    homepagedata : [],
    bundlepagedata: [],
    searchresultdata : null
}

const Reducer = ( state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_HOMEPAGE_DATA:
            return {
                ...state,
                homepagedata : action.homepagedata
            }
        case ActionTypes.SET_BUNDLEPAGE_DATA:
            return {
                ...state,
                bundlepagedata : action.bundlepagedata
            }
        case ActionTypes.SET_SEARCHRESULT_DATA:
            return {
                ...state,
                searchresultdata : action.searchresultdata
            }
        default :
            return {
                ...state
            }
    }
}

export default Reducer;