"use client"
import React, { useState } from 'react'
import './navbar.css'
import { CiSearch } from 'react-icons/ci'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaRegHeart, FaRegUser } from 'react-icons/fa6'
import { IoCreateOutline, IoDocumentTextOutline, IoGridOutline, IoLogInOutline } from 'react-icons/io5'
import { HiOutlineHome, HiOutlineMenu } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import Link from 'next/link'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <header className="navbar">
                <div className="navbar-top">
                    <div className="navbar-container">
                        <div className="navbar-intro">
                            <div className="logo">
                                <Link href="/" className="logo-th">
                                    <AiTwotoneHome />THShop
                                </Link>
                            </div>
                            <div className="navbar_search">
                                <input type="search" placeholder="Enter your product name..." className="search-field"/>
                                <button className="search-btn">
                                    <CiSearch />
                                </button>
                            </div>
                            <div className="navbar-icons">
                                <div className="action-btn">
                                    <FaRegUser className='icon icon-user' />
                                    <div className="user-list">
                                        <Link href="/admin" className="user-item">
                                            <IoDocumentTextOutline/>
                                            Profile
                                        </Link>
                                        <Link href="/login" className="user-item">
                                            <IoLogInOutline/>
                                            Đăng nhập
                                        </Link>
                                        <Link href="/register" className="user-item">
                                            <IoCreateOutline/>
                                            Đăng ký
                                        </Link>
                                    </div>
                                </div>
                                <Link href="/" className="action-btn">
                                    <FaRegHeart className='icon' />
                                    <span className="count">0</span>
                                </Link>
                                <Link href="/cart" className="action-btn">
                                    <GrCart className='icon'/>
                                    <span className="count">0</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar-bottom">
                    <ul className="desktop-menu-category-list">
                        <li className="menu-category">
                            <Link href="/" className="menu-title">HOME</Link>
                        </li>
                        <li className="menu-category">
                            <Link href="/product" className="menu-title">PRODUCTS</Link>
                        </li>
                        <li className="menu-category">
                            <Link href="/blog" className="menu-title">BLOG</Link>
                        </li>
                        <li className="menu-category">
                            <Link href="/about" className="menu-title">ABOUT</Link>
                        </li>
                        <li className="menu-category">
                            <Link href="/contact" className="menu-title">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="navbar-mobile">
                <Link href="/" className="action-btn" onClick={toggleMenu}>
                    <HiOutlineMenu />
                </Link>
                <Link href="/" className="action-btn">
                    <FaRegHeart className='icon' />
                    <span className="count">0</span>
                </Link>
                <Link href="/" className="action-btn">
                    <FiHome />
                </Link>
                <Link href="/cart" className="action-btn">
                    <GrCart className='icon'/>
                    <span className="count">0</span>
                </Link>
                <Link href="/" className="action-btn">
                    <FaRegUser className='icon' />
                </Link>
            </div>
            <CSSTransition in={isMenuOpen} classNames="menu-overlay" timeout={300} >
                <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
            </CSSTransition>
            <CSSTransition in={isMenuOpen} classNames="menu" timeout={300} >
                <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    <h3>Menu</h3>
                    <Link href="/" className="mobile-menu-title">HOME</Link>
                    <Link href="/product" className="mobile-menu-title">PRODUCTS</Link>
                    <Link href="/blog" className="mobile-menu-title">BLOG</Link>
                    <Link href="/about" className="mobile-menu-title">ABOUT</Link>
                    <Link href="/contact" className="mobile-menu-title">CONTACT</Link>
                </div>
            </CSSTransition>
        </> 
    )
}

export default NavBar