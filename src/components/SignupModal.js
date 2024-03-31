import React, { useEffect, useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SignUpModal({ isOpen, onOpen, onClose }){
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const navigate = useNavigate();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isPasswordNotMatch, setIsPasswordNotMatch] = useState(false);
    const [isError, setIsError] = useState(null);

    const [inputUserName, setInputUserName] = useState("");
    const [inputUserEmail, setInputUserEmail] = useState("");
    const [inputUserPassword, setInputUserPassword] = useState("");
    const [inputUserConfirmPassword, setInputUserConfirmPassword] = useState("");
    function handleShowPassword(){
        setIsShowPassword(prev => {
            if(!prev) return true;
            else return false;
        });
    }

    function handleSubmit(){
        fetch("https://shop-x-master-project-backend.vercel.app/api/user/auth/normal/create", {
            method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
                user_name: inputUserName,
				user_email: inputUserEmail,
				user_password: inputUserPassword
			}),
        }).then(response => response.json()).then(response =>{
            if(response.status === "FAIL"){
                setIsError(response.message);
                return console.log(response.message);
            }
            return onClose();
        }).catch(e => console.log(e));
    }

    useEffect(() =>{
        if(inputUserPassword !== inputUserConfirmPassword && inputUserConfirmPassword.length !== 0) return setIsPasswordNotMatch(true);
        else return setIsPasswordNotMatch(false);
    }, [inputUserPassword, inputUserConfirmPassword]);

    return(
        <>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                isCentered={true}
                motionPreset='scale'
            >
                <ModalOverlay style={{ backdropFilter: "blur(5px)" }} />
                <ModalContent bgColor={"#3f3f40"} boxSize={"auto"} borderRadius={10} >
                    <ModalHeader>
                        <div className="flex flex-col text-center gap-1">
                            <div className="text-2xl font-light text-white">
                                Register                    
                            </div>
                            <div className="text-lg font-normal text-white">
                                to Create Your Account
                            </div>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex flex-col gap-2">
                                <div className="grid grid-cols-12 text-white">
                                    <i className="fa-solid fa-user col-span-1"></i>
                                    <h1 className="font-normal col-span-11">Username</h1>
                                </div>
                                <Input className="text-white" type="text" placeholder='Username' onChange={(event) =>{
                                    setInputUserName(event.target.value);
                                    setIsError(null);
                                }} />
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="grid grid-cols-12 text-white">
                                    <i className="fa-solid fa-envelope col-span-1"></i>
                                    <h1 className="font-normal col-span-11">E-Mail</h1>
                                </div>
                                <Input className="text-white" type="email" placeholder='E-mail' onChange={(event) =>{ 
                                    setInputUserEmail(event.target.value);
                                    setIsError(null);
                                }} />
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="grid grid-cols-12 text-white">
                                    <i className="fa-solid fa-lock col-span-1"></i>
                                    <h1 className="font-normal col-span-11">Password</h1>
                                </div>
                                <div className="grid grid-cols-8 items-center gap-5 text-white">
                                    <Input type={`${isShowPassword ? "text" : "password"}`} className="col-span-7" placeholder='Password' onChange={(event) =>{
                                        setInputUserPassword(event.target.value);
                                        setIsError(null);
                                    }} />
                                    <div className="cursor-pointer" onClick={() => handleShowPassword()}>
                                        {isShowPassword ? 
                                            <i className="fa-solid fa-eye fa-lg"></i>
                                            :
                                            <i className="fa-solid fa-eye-slash fa-lg"></i>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="grid grid-cols-12 text-white">
                                    <i className="fa-solid fa-lock col-span-1"></i>
                                    <h1 className="font-normal col-span-11">Comfirm Password</h1>
                                </div>
                                <Input className="text-white" type="password" placeholder='Confirm Password' onChange={(event) =>{
                                    setInputUserConfirmPassword(event.target.value);
                                    setIsError(null);
                                }} />
                                <p className={`text-error ${isPasswordNotMatch ? "flex" : "hidden"}`}>Password Not match</p>
                            </div>

                            <p className={`text-error ${isError ? "" : "hidden"}`}>{isError}</p>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <div className="flex flex-col w-full gap-5">
                            <Button onClick={() => handleSubmit()} className="w-full col-span-6"><i className="fa-solid fa-user-plus mr-3"></i>Register</Button>
                            <Button onClick={onClose} className="w-full">Cancel</Button>
                        </div>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}


export default SignUpModal;