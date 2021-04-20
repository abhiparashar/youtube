import axios from "axios"

const KEY = "AIzaSyCs15RvCG4W53Z0gURCqwEFBh48nuMxp0I"

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:"snippet",
        maxResults:5,
        key:KEY
    }

})