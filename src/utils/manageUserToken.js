function setUserToken(token){
    return localStorage.setItem("user_token", String(token));
}

function getUserToken(){
    return localStorage.getItem("user_token");
}

function removeUserToken(){
    return localStorage.removeItem("user_token");
}


export {
    setUserToken,
    getUserToken,
    removeUserToken
}