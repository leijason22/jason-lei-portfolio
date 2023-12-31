import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/jasonlogo2.png";


const Sidebar = () => {
  return (
    <aside className = 'aside'>
        <a href="#home" className="nav_logo">
            <img src={Logo} alt="" />
        
        </a>

        <nav className="nav">
            <div className="nav_menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" className="nav_link">
                            <i className="icon-home"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i className="icon-info"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#experience" className="nav_link">
                            <i className="icon-briefcase"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#projects" className="nav_link">
                            <i className="icon-organization"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                        <i className="icon-chart"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#contact" className="nav_link">
                            <i className="icon-phone"></i>

                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#resume" className="nav_link">
                            <i className="icon-book-open"></i>

                        </a>
                    </li>



                </ul>
            </div>

        </nav>

        <div className="nav_footer">
            <span className="copyright">&copy; 2023 - 2023.</span>
        </div>

    </aside>
  )
}

export default Sidebar

//rafce command