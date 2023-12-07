import {useRef} from "react";

import "./navbarpanel.css";

// React router dom
import { NavLink } from "react-router-dom";

// Icons
import { MdHomeFilled } from "react-icons/md";
import { IoMdAdd, IoIosClose  } from "react-icons/io";
import { LuListMinus, LuLogOut  } from "react-icons/lu";
import { RiNotification2Fill } from "react-icons/ri";
import { GiCarKey } from "react-icons/gi";
import { FaBarsStaggered } from "react-icons/fa6";

// Models
import { PRIVATE_ROUTES } from "@/models/Routes.model";

// redux
import {useDispatch} from "react-redux"
import { logout } from "@/redux/user/UserSlice";

// redux
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";

export const NavbarPanel = () => {

    // Initialize ref and user and dispatch
    const dispatch = useDispatch();
    const user = useSelector((store: AppStore) => store.user)
    const navbarWrapperDiv = useRef(document.createElement("div"));
    const btnCloseNavbar = useRef(document.createElement("button"));

    const logoutSession = () => {
        dispatch(logout());
    }

    // Handler show navbar
    const handlerShowNavbarModbile = () => {
        if(!navbarWrapperDiv.current?.classList.contains("active")){
            navbarWrapperDiv.current?.classList.add("active")
            btnCloseNavbar.current?.classList.remove("hidden")
        }else{
            navbarWrapperDiv.current?.classList.remove("active")
            btnCloseNavbar.current?.classList.add("hidden")
        }
    }

    return (
        <>
        <div className="subnavbarMobile">
            <button onClick={handlerShowNavbarModbile}>
                <FaBarsStaggered />
            </button>

            <button className="hidden" onClick={handlerShowNavbarModbile} ref={btnCloseNavbar}>
                <IoIosClose/>
            </button>
        </div>

        <section className="navbarpanel" ref={navbarWrapperDiv}>

            <div className="flex shrink-0 p-11 items-center justify-between h-[96px] sidenav-logotype">
                <img  
                style={{maxHeight: "150px", objectFit: "contain"}}
                alt="Logo" src="/logotype.png" className="inline" />
            </div>

            <div className="flex items-center justify-between navbarpanel-user">
                <div className="flex items-center mr-5">
                    <div className="mr-5">
                        <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                        <img 
                        className="w-[50px] h-[50px] shrink-0 inline-block rounded-[.95rem]" src="/avatar.webp" alt="avatar image" />
                        </div>
                    </div>
                    <div className="mr-2 ">
                        <a href="#" className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse">{user.name}</a>
                        <span className="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">SEO Manager</span>
                    </div>
                </div>
                <NavLink to={PRIVATE_ROUTES.settings} className="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0">
                <span className="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                </span>
                </NavLink>
                
                <button onClick={logoutSession}>
                    <LuLogOut />
                </button>
            </div>

            <div className="navbarpanel-items">
                <div className="flex flex-col w-full font-medium">

                    <NavLink to={`/${PRIVATE_ROUTES.dashboard}`} className="navbarpanel-items-item">
                    <div className={`px-4 py-[1rem] flex items-center text-[1.15rem] dark:text-neutral-400/75 navbarpanel-items-item-link`}> 
                            <MdHomeFilled className="mr-2" /> Dashboard
                        </div>
                    </NavLink>

                    <div className="block pt-5 pb-[.15rem]">
                        <div className="px-4 py-[.65rem]">
                            <span className="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">
                                Messages
                            </span>
                        </div>
                    </div>


                    <NavLink to={`/${PRIVATE_ROUTES.dashboard}/new-message`} className="navbarpanel-items-item">
                    <div className={`px-4 py-[1rem] flex items-center  text-[1.15rem] dark:text-neutral-400/75 navbarpanel-items-item-link`}> 
                            <IoMdAdd className="mr-2" /> New
                        </div>
                    </NavLink>

                    <NavLink to={`/${PRIVATE_ROUTES.dashboard}/messages`} className="navbarpanel-items-item">
                    <div className={`px-4 py-[1rem] flex items-center  text-[1.15rem] dark:text-neutral-400/75 navbarpanel-items-item-link`}> 
                            <LuListMinus  className="mr-2" /> List
                        </div>
                    </NavLink>

                    {/* Separador */}
                    <div className="block pt-5 pb-[.15rem]">
                        <div className="px-4 py-[.65rem]">
                            <span className="font-semibold text-[0.95rem] uppercase dark:text-neutral-500/80 text-secondary-dark">
                                OTHERS
                            </span>
                        </div>
                    </div>

                    <NavLink to={`/${PRIVATE_ROUTES.dashboard}/notify`} className="navbarpanel-items-item">
                    <div className={`px-4 py-[1rem] flex items-center  text-[1.15rem] dark:text-neutral-400/75 navbarpanel-items-item-link`}> 
                            <RiNotification2Fill className="mr-2" /> Notify
                        </div>
                    </NavLink>

                    <NavLink to={`/${PRIVATE_ROUTES.dashboard}/sales`} className="navbarpanel-items-item">
                    <div className={`px-4 py-[1rem] flex items-center  text-[1.15rem] dark:text-neutral-400/75 navbarpanel-items-item-link`}> 
                    <GiCarKey className="mr-2" /> Sales
                        </div>
                    </NavLink>

                </div>
            </div>
        
        </section>
        </>
    )
}
