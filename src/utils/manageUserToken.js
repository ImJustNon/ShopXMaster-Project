function setClientUserToken(token){
    localStorage.setItem("client_user_token", String(token));
    return;
}

function getClientUserToken(){
    return localStorage.getItem("client_user_token");
}

function removeClientUserToken(){
    localStorage.removeItem("client_user_token");
    window.location.reload();
    return;
}


export {
    setClientUserToken,
    getClientUserToken,
    removeClientUserToken
}