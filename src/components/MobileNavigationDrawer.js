import React, { useEffect, useState } from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo2_notransparent.png";
import { getClientUserToken, removeClientUserToken } from "../utils/manageUserToken";

function MobileNavigationDrawer({ isOpen, onClose, onOpen, signInOnOpen, signUpOnOpen }){
    const btnRef = React.useRef();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() =>{
        if(getClientUserToken()){
            setIsLogin(true);
        }
    }, []);


    function handleClickEditProfileSetting(){
        onClose();
    }

    function handleSignInOrSignUp(option){
        onClose();
        if(option === "signin") return signInOnOpen();
        if(option === "signup") return signUpOnOpen();
    }

    function handleLogout(){
        removeClientUserToken();
    }
    
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"xs"}
                isFullHeight={false}
            >
                <DrawerOverlay />
                <DrawerContent bgColor={"rgba(63, 63, 63, 0.4)"} backdropFilter={"blur(6px)"}>
                    <DrawerHeader>
                        <div className="flex flex-col mt-2 gap-5 w-full">
                            <div className="text-left grid grid-cols-5 justify-around items-center text-white">
                                <div className="w-24 mx-auto col-span-2">
                                    <img src={logo} className="rounded-full border-solid border-2 border-white shadow-2xl" />
                                </div>
                                <div className="text-center col-span-3">
                                    <div className="text-xl">
                                        SHOP
                                    </div>
                                    <div className="text-xs">
                                        X
                                    </div>
                                    <div className="text-xl">
                                        MASTER
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto">
                                <button className="btn btn-sm rounded-full" onClick={() => handleClickEditProfileSetting()} >
                                    <i className="fa-solid fa-user-gear"></i> 
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                        
                    </DrawerHeader>
        
                    <DrawerBody>
                        <div className="flex flex-col gap-2 pt-5">
                            <Link to={`/`} className="btn btn-md btn-white w-full text-black">
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="text-center">
                                        <i className="fa-solid fa-house"></i>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        {("Home")}
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/store`} className="btn btn-md btn-white w-full text-black">
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="text-center">
                                        <i className="fa-solid fa-store"></i>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        {("Store")}
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/topup`} className="btn btn-md btn-white w-full text-black">
                                <div className="grid grid-cols-3 gap-4 w-full">
                                    <div className="text-center">
                                        <i className="fa-solid fa-dollar"></i>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        {("Topup")}
                                    </div>
                                </div>
                            </Link>

                            <div className="grid grid-cols-2 pt-20 gap-2">
                                {
                                    isLogin ?
                                        <button className="btn btn-sm btn-white col-span-2 w-fit mx-auto text-black" onClick={() => handleLogout()}>
                                            <div className="grid grid-cols-3 gap-4 w-full px-3">
                                                <div className="text-center">
                                                    <i className="fa-solid fa-right-to-bracket"></i>
                                                </div>
                                                <div className="col-span-2 text-left">
                                                    {("Logout")}
                                                </div>
                                            </div>
                                        </button>
                                    :
                                    <>
                                        <button className="btn btn-sm btn-white col-span-1 w-full text-black" onClick={() => handleSignInOrSignUp("signin")}>
                                            <div className="grid grid-cols-3 gap-4 w-full">
                                                <div className="text-center">
                                                    <i className="fa-solid fa-right-to-bracket"></i>
                                                </div>
                                                <div className="col-span-2 text-left">
                                                    {("Login")}
                                                </div>
                                            </div>
                                        </button>
                                        <button className="btn btn-sm btn-white col-span-1 w-full text-black" onClick={() => handleSignInOrSignUp("signup")}>
                                            <div className="grid grid-cols-3 gap-4 w-full">
                                                <div className="text-center">
                                                    <i className="fa-solid fa-user-plus"></i>
                                                </div>
                                                <div className="col-span-2 text-left">
                                                    {("Register")}
                                                </div>
                                            </div>
                                        </button>
                                    </>
                                }
                                
                            </div>
                        </div>
                    </DrawerBody>
        
                    <DrawerFooter>
                        <div className="flex flex-row justify-end w-full">
                            <div>
                                <button className="btn btn-sm btn-error text-white rounded-full" onClick={onClose}>
                                    <i className="fa-solid fa-x"></i> 
                                    {("Close")}
                                </button>
                            </div>
                        </div>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}


export default MobileNavigationDrawer;