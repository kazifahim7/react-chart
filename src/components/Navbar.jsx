import { useState } from "react";
import Link from "./link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Contact', path: '/contact' },
    ];

    return (
        <nav>
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoClose></IoClose> : <RiMenu2Line className=" "></RiMenu2Line>
                }

            </div>
            <ul className={`md:flex md:static absolute md:shadow-none shadow-lg md:top-0 md:duration-0 duration-1000 md:p-5 ${open === true ? 'top-10' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;