import React from 'react'
import './navbar.css'
import { CiSearch } from 'react-icons/ci'
import { AiTwotoneHome } from 'react-icons/ai'
import { FaCartShopping, FaRegHeart, FaRegUser } from 'react-icons/fa6'
import Link from 'next/link'
import { IoCreateOutline, IoDocumentTextOutline, IoLogInOutline } from 'react-icons/io5'

const NavBar = () => {
    return (
        <>
            <header className="navbar">
                <div className="navbar-top">
                    <div className="navbar-container">
                        <div className="navbar-intro">
                            <div className="logo">
                                <AiTwotoneHome />THShop
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
                                <button className="action-btn">
                                    <FaRegHeart className='icon' />
                                    <span className="count">0</span>
                                </button>
                                <button className="action-btn">
                                    <FaCartShopping className='icon'/>
                                    <span className="count">0</span>
                                </button>
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
                
            </div>
        </>
        
    )
}

export default NavBar