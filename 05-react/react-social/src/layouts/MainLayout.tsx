
import { HiMoon } from "react-icons/hi2"
import { Outlet, NavLink } from "react-router"
import { UserProvider } from "../context/user-context/UserProvider"

export const MainLayout = () => {

    return (
        <UserProvider>
            <div className="container mx-auto">
                <header className="py-2 px-4 md:px-0 flex items-center mb-6">

                    <NavLink to="/">

                        <img
                            alt="Your Company"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            className="h-8 w-auto"
                        />

                    </NavLink>

                    <nav className="flex-1 flex justify-end gap-4">

                        <NavLink to="/contact" className="hover:text-blue-400">Contact</NavLink>

                        <button>
                            <HiMoon className="size-6 text-[#222]" />
                        </button>
                    </nav>

                </header>

                <main>
                    <Outlet />
                </main>
            </div>
        </UserProvider>
    )
}