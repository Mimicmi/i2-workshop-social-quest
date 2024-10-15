"use client";

import NavbarComponent from "../navbar/navbarComponent";

export default function Dashboard() {
    return (
        <>
            <NavbarComponent />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-black">
                    Bienvenue sur le dashboard
                </h1>
            </div>
        </>
    );
}
