import { AiFillStar, AiOutlineCamera, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai"
import "./productitem.css"
import Link from "next/link"

const ProductItem = () => {
    return (
        <div className="product-grid">
            <div className="showcase">
                <div className="showcase-banner">
                    
                    <img src="/products/product-1.png" alt="chair1" className="product-img default" />
                    <img src="/products/product-2.png" alt="chair2" className="product-img hover" />


                    <div className="showcase-actions">
                        <button className="btn-action">
                            <AiOutlineHeart className="product_btn-icon"/>
                        </button>
                        <button className="btn-action">
                            <AiOutlineEye className="product_btn-icon"/>
                        </button>
                        <button className="btn-action">
                            <AiOutlineShoppingCart className="product_btn-icon"/>
                        </button>
                        <button className="btn-action">
                            <AiOutlineCamera className="product_btn-icon"/>
                        </button>
                    </div>
                </div>
                <div className="showcase-content">
                    <Link href="/" className="showcase-category">Sofa</Link>

                    <Link href="/">
                        <h3 className="showcase-title">Chiec sofa sang chanh cho ban</h3>
                    </Link>

                    <div className="showcase-rating">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>

                    <div className="price-box">
                        <p className="price">$48.00</p>
                        <del>$75.00</del>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProductItem