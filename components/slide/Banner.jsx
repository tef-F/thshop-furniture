import Image from "next/image"
import "./banner.css"
import Link from "next/link"

const Banner = () => {
    return (
        <div className="banner">
            <div className="slider-container has-scrollbar">
                <div className="slider-item">
                    <img src="/banner1.jpg" alt="banner1" className="banner-img"/>
                    <div className="banner-content">
                        <p className="banner-subtitle">Nội thất hiện đại</p>
                        <h2 className="banner-title">Đem lại sự thoải mái cho bạn</h2>

                        <Link href="#" className="banner-btn">Mua ngay</Link>
                    </div>
                </div>
                <div className="slider-item">
                    <img src="/banner1.jpg" alt="banner1" className="banner-img"/>
                    <div className="banner-content">
                        <p className="banner-subtitle">Nội thất hiện đại</p>
                        <h2 className="banner-title">Đem lại sự thoải mái cho bạn</h2>

                        <Link href="#" className="banner-btn">Mua ngay</Link>
                    </div>
                </div>
                <div className="slider-item">
                    <img src="/banner1.jpg" alt="banner1" className="banner-img"/>
                    <div className="banner-content">
                        <p className="banner-subtitle">Nội thất hiện đại</p>
                        <h2 className="banner-title">Đem lại sự thoải mái cho bạn</h2>

                        <Link href="#" className="banner-btn">Mua ngay</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner