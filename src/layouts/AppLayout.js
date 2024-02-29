import { AnimatePresence, motion } from 'framer-motion';
import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AppLayout({ children }){
    const { language } = useParams();
    const { pathname } = useLocation();

    return(
        <>
            <Navbar />
            <div className="pt-16"></div>
            <AnimatePresence wait>
                <motion.div 
                    key={pathname}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 0.3,
                    }}
                    variants={{
                        initialState: {
                            opacity: 0, 
                            transform: "translateY(100px)",
                        },
                        animateState: {
                            opacity: 1, 
                            transform: 0,
                        },
                        exitState: {},
                    }}
                >        
                    {/* App Page Chidren */}
                    {React.Children.map(children, (child) =>{
                        return React.cloneElement(child, { 
                            language: language,
                        });
                    })}
                </motion.div>
			</AnimatePresence>
        </>
    );
}

export default AppLayout;