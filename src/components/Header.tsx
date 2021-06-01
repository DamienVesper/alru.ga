import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <span className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="/">
                        <span className="ml-3 text-xl text-indigo-300">Alliance Reunited</span>
                    </a>
                </span>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-white" to="/staff">Staff</Link>
                    <Link className="mr-5 hover:text-white" to="https://panel.alru.ga">Panel</Link>
                    <Link className="mr-5 hover:text-white" to="https://discord.alru.ga">Discord</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
