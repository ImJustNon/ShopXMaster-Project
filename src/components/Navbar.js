import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Input, Button } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logo2 from "../assets/images/logo2.png";
import SignInModal from "./SigninModal";
import SignUpModal from "./SignupModal";

function Navbar({language}){
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navigate = useNavigate();

    const { pathname } = useLocation();


    // signin modal Disclosure
    const signInModalDisclosure = useDisclosure();
    const signInModalIsOpen = signInModalDisclosure.isOpen;
    const signInModalOnOpen = signInModalDisclosure.onOpen;
    const signInModalOnClose = signInModalDisclosure.onClose;

    // signup modal Disclosure
    const signUpModalDisclosure = useDisclosure();
    const signUpModalIsOpen = signUpModalDisclosure.isOpen;
    const signUpModalOnOpen = signUpModalDisclosure.onOpen;
    const signUpModalOnClose = signUpModalDisclosure.onClose;

    return(
        <>
             <div className="navbar fixed text-white z-10 bg-slate-700 bg-opacity-10 backdrop-blur-md shadow-lg" >
                <div className="container mx-auto">
                    <div className="navbar-start ml-3 md:ml-0">
                        <div className="flex justify-start items-center flex-row gap-5 cursor-pointer">
                            <img src={logo2} className="w-10 hidden rounded-full md:flex" />
                            <h1 className="text-2xl font-bold">{("SHOP X MASTER")}</h1>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <div className="menu menu-horizontal px-1 space-x-3">
                            <Link 
                                to={`/`} 
                                className={`btn btn-sm font-normal btn-ghost text-white ${true ? "btn-active" : ""}`} 
                            >
                                <i className="fa-solid fa-house"></i>
                                {("Home")}
                            </Link>
                            <Link 
                                to={`/store`} 
                                className={`btn btn-sm font-normal btn-ghost text-white ${true ? "btn-active" : ""}`} 
                            >
                                <i className="fa-solid fa-store"></i>
                                {("Store")}
                            </Link>
                            <Link 
                                to={`/topup`} 
                                className={`btn btn-sm font-normal btn-ghost text-white ${true ? "btn-active" : ""}`} 
                            >
                                <i className="fa-solid fa-dollar"></i>
                                {("Topup")}
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-end text-end">
                        <div className="lg:flex justify-end gap-3 hidden">
                            <button 
                                className={`btn btn-md font-normal btn-ghost text-lg text-white ${true ? "btn-active" : ""}`} 
                                onClick={signInModalOnOpen}
                            >
                                <i className="fa-solid fa-right-to-bracket"></i>
                                Login
                            </button>
                            <button 
                                className={`btn btn-md font-normal btn-ghost text-lg text-white ${true ? "btn-active" : ""}`} 
                                onClick={() => ""}
                            >
                                <i className="fa-solid fa-user-plus"></i>
                                Register
                            </button>
                        </div>
                        {/* Mobile burger button */}
                        <div className="btn btn-ghost lg:hidden" onClick={() => {}}>
                            <Burger />
                        </div>
                    </div>
                </div>
            </div>
            <SignInModal isOpen={signInModalIsOpen} onClose={signInModalOnClose} onOpen={signInModalOnOpen} />
            <SignUpModal isOpen={signUpModalIsOpen} onClose={signUpModalOnClose} onOpen={signUpModalOnOpen} />
        </>
    );
}
function Burger(){
    return(
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h8m-8 6h16" 
            />
        </svg> 
    );
}


export default Navbar;