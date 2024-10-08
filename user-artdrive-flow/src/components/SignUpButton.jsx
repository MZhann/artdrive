"use client";

import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const SignUpButton = ({ lang }) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const buttonRef = useRef(null);

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                if (!window) return;
                const accessToken = localStorage.getItem("accessToken");
                const response = await fetch(
                    "https://artdrivebackend-production.up.railway.app/api/v1/profile/",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    setUserInfo(data);
                }
            } catch (error) {
                console.error("Failed to fetch user info:", error);
            }
        };

        fetchUserInfo();
    }, []);

    const navigateToRegister = () => {
        router.push("/auth/register");
    };

    const navigateToLogin = () => {
        router.push("/auth/login");
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    if (userInfo) {
        return (
            <Link
                href={'/profile'}
                className="relative flex items-center space-x-2"
                ref={buttonRef}
                // onClick={toggleModal}
            >
                {userInfo.avatar && (
                    <Image
                        src={userInfo.avatar}
                        alt="User Avatar"
                        width={30}
                        height={30}
                        className="rounded-full cursor-pointer w-[30px] h-[30px] object-cover"
                    />
                )}
                <span className="text-white cursor-pointer">
                    {userInfo.username}
                </span>

            </Link>
        );
    }

    return (
        <div className="relative" ref={buttonRef}>
            <button
                onClick={toggleModal}
                className={`${
                    lang === "en"
                        ? "p-1 w-[90px] hover:w-[95px] text-[12px]"
                        : "text-[11px] text-nowrap w-[140px]  flex items-center hover:w-[95px] justify-center"
                } h-[25px] rounded-3xl bg-[#A8FF35] text-black text-center font-montserrat font-semibold hover:h-[35px] duration-200 transition-all`}
            >
                {lang === "en" ? "Start Now" : "Начни сейчас"}
            </button>
            {showModal && (
                <div className="absolute mt-2 right-0 w-[120px] bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    <div
                        className="p-2 cursor-pointer hover:bg-gray-300 rounded-md"
                        onClick={navigateToLogin}
                    >
                        Log In
                    </div>
                    <div
                        className="p-2 cursor-pointer hover:bg-gray-300 rounded-md"
                        onClick={navigateToRegister}
                    >
                        Register
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignUpButton;
