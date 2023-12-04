import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "./categories.css"

const Categories = () => {
    return (
        <div className="category">
            <div className="category-container-item has-scrollbar">
                <div className="category-item">
                    <div className="category-img-box">
                        <Image src="/icons/icon-chair-1.svg" alt="image" width={30} height={30} />
                    </div>
                    <div className="category-content-box">
                        <div className="category-content-flex">
                            <h3 className="category-item-title">Ghế Sofa</h3>

                            <p className="category-item-amount">(50)</p>
                        </div>

                        <Link href="/" className="category-btn">Show all</Link>
                    </div>
                </div>

                <div className="category-item">
                    <div className="category-img-box">
                        <Image src="/icons/icon-chair-2.svg" alt="image" width={30} height={30} />
                    </div>
                    <div className="category-content-box">
                        <div className="category-content-flex">
                            <h3 className="category-item-title">Ghế Gỗ</h3>

                            <p className="category-item-amount">(50)</p>
                        </div>

                        <Link href="/" className="category-btn">Show all</Link>
                    </div>
                </div>

                <div className="category-item">
                    <div className="category-img-box">
                        <Image src="/icons/icon-chair-3.svg" alt="image" width={30} height={30} />
                    </div>
                    <div className="category-content-box">
                        <div className="category-content-flex">
                            <h3 className="category-item-title">Ghế Gamming</h3>

                            <p className="category-item-amount">(50)</p>
                        </div>

                        <Link href="/" className="category-btn">Show all</Link>
                    </div>
                </div>

                <div className="category-item">
                    <div className="category-img-box">
                        <Image src="/icons/icon-chair-4.svg" alt="image" width={30} height={30} />
                    </div>
                    <div className="category-content-box">
                        <div className="category-content-flex">
                            <h3 className="category-item-title">Ghế Bếp</h3>

                            <p className="category-item-amount">(50)</p>
                        </div>

                        <Link href="/" className="category-btn">Show all</Link>
                    </div>
                </div>

                <div className="category-item">
                    <div className="category-img-box">
                        <Image src="/icons/icon-chair-5.svg" alt="image" width={30} height={30} />
                    </div>
                    <div className="category-content-box">
                        <div className="category-content-flex">
                            <h3 className="category-item-title">Bàn Coffe</h3>

                            <p className="category-item-amount">(50)</p>
                        </div>

                        <Link href="/" className="category-btn">Show all</Link>
                    </div>
                </div>

                <div className="category-item">
                    <div className="category-img-box">
                        <Image src="/icons/icon-chair-1.svg" alt="image" width={30} height={30} />
                    </div>
                    <div className="category-content-box">
                        <div className="category-content-flex">
                            <h3 className="category-item-title">Ghế Xoay</h3>

                            <p className="category-item-amount">(50)</p>
                        </div>

                        <Link href="/" className="category-btn">Show all</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories