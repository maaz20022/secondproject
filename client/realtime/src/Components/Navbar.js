import React from 'react';
const Navbar = () => {
    return (
        <>
            <header>

                <nav>
                    <div className="left">Maaz's Portfolio</div>
                    <div className="right">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Projects</a></li>
                            <li><a href="/">Contact Me</a></li>
                        </ul>
                    </div>
                </nav>

            </header>
        </>
    )
}
export default Navbar;