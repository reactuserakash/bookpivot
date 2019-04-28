import * as ActonTypes from "./ActionTypes";
import axios from "axios";


//get homepage data
export const fetchHomepageData = () => {
    return dispatch => {
        axios.get("/bookpivotapi/homepage").then((res)=>{
            dispatch(setHomepageData(res.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const setHomepageData = (homepagedata) =>{
    return {
        type : ActonTypes.SET_HOMEPAGE_DATA,
        homepagedata : homepagedata
    }
}

//get bundlepage data
export const fetchBundlepageData = () => {
    return dispatch => {
        axios.get("/bookpivotapi/bundlepage").then((res)=>{
            dispatch(setBundlepageData(res.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const setBundlepageData = (bundlepagedata) =>{
    return {
        type : ActonTypes.SET_BUNDLEPAGE_DATA,
        bundlepagedata : bundlepagedata
    }
}


//get searchpage data
export const fetchSearchResultData = (searchstring) => {
    return dispatch => {
        axios.get(`/bookpivotapi/searchpage/${searchstring}`).then((res)=>{
            dispatch(setSearchResultData(res.data))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const setSearchResultData = (searchresultdata) =>{
    return {
        type : ActonTypes.SET_SEARCHRESULT_DATA,
        searchresultdata : searchresultdata
    }
}