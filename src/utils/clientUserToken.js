export function setClientUserToken(user_t){
    localStorage.setItem("userClientToken", String(user_t));
    return;
}

export function removeClientUserToken(){
    localStorage.removeItem("userClientToken");
    window.location.reload();
    return;
}

export function getClientUserToken(){
    return localStorage.getItem("userClientToken");
}