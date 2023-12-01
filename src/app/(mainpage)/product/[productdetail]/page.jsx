"use client"
import Link from 'next/link'
import "./pageDetail.css"
import { AiFillCheckCircle, AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react'

const ProductDetail = () => {
    const imgBtns = [
        { id: 1, src: '/products/1.png', alt: 'chair' },
        { id: 2, src: '/products/2.png', alt: 'chair' },
        { id: 3, src: '/products/3.png', alt: 'chair' },
        { id: 4, src: '/products/4.png', alt: 'chair' }
    ];

    const [imgId, setImgId] = useState(1);

    const handleShowImg = (id) => {
        setImgId(id);
    }

    
    return (
        <div className="page-product-detail">
            <div className="section-product">
                <div className="pro-card">
                    <div className="pro-imgs">
                        <div className="img-display">
                            <div className="img-showcase">
                                {imgBtns.map((imgItem) => (
                                    <img
                                        key={imgItem.id}
                                        src={imgItem.src}
                                        alt={imgItem.alt}
                                        style={{ display: imgItem.id === imgId ? 'block' : 'none' }} 
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="img-select">
                            {imgBtns.map((imgItem) => (
                                <div key={imgItem.id} className="img-item">
                                    <div onClick={() => handleShowImg(imgItem.id)}>
                                        <img src={imgItem.src} alt={imgItem.alt} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="pro-content">
                        <h2 className="pro-title">Wood Chair</h2>
                        <div className="pro-rating">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <span>4.7(21)</span>
                        </div>
                        <div className="pro-price">
                            <p className="last-price">Old Price : <span>$257.00</span></p>
                            <p className="new-price">New Price : <span>$249.00(5%)</span></p>
                        </div>
                        <div className="pro-detail">
                            <h2>About this item</h2>
                            <p>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Amet quas, vitae perspiciatis,
                                voluptate sed nostrum quaerat dolor deleniti atque vel vero excepturi.
                                Dolore eum, odit inventore sunt repudiandae labore autem.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sapiente tenetur nihil in, rem quia hic!
                            </p>
                            <ul>
                                <li><AiFillCheckCircle /> Color: <span>Black</span></li>
                                <li><AiFillCheckCircle /> Avilable: <span>In stock</span></li>
                                <li><AiFillCheckCircle /> Category: <span>Sofa</span></li>
                                <li><AiFillCheckCircle /> Shipping Area: <span>VietNam</span></li>
                            </ul>
                        </div>
                        <div className="purchase-info">
                            <input type="number" name="quantity" min="1"/>
                            <button className="btn">
                                Add to Cart
                                <AiOutlineShoppingCart />
                            </button>
                            <button className="btn">
                                + Wishlist
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="section-des-product">
                <h2>Mô tả sản phẩm</h2>
                <p>Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit.
                    Aliquid, unde labore recusandae nisi laborum quas,
                    velit expedita debitis possimus explicabo eveniet rerum,
                    iusto accusamus veniam. Quaerat corporis facilis veniam minima.
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit.
                    Aliquid, unde labore recusandae nisi laborum quas,
                    velit expedita debitis possimus explicabo eveniet rerum,
                    iusto accusamus veniam. Quaerat corporis facilis veniam minima.
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit.
                    Aliquid, unde labore recusandae nisi laborum quas,
                    velit expedita debitis possimus explicabo eveniet rerum,
                    iusto accusamus veniam. Quaerat corporis facilis veniam minima.
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit.
                    Aliquid, unde labore recusandae nisi laborum quas,
                    velit expedita debitis possimus explicabo eveniet rerum,
                    iusto accusamus veniam. Quaerat corporis facilis veniam minima.
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit.
                    Aliquid, unde labore recusandae nisi laborum quas,
                    velit expedita debitis possimus explicabo eveniet rerum,
                    iusto accusamus veniam. Quaerat corporis facilis veniam minima.
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit.
                    Aliquid, unde labore recusandae nisi laborum quas,
                    velit expedita debitis possimus explicabo eveniet rerum,
                    iusto accusamus veniam. Quaerat corporis facilis veniam minima.
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit.
                    Aliquid, unde labore recusandae nisi laborum quas,
                    velit expedita debitis possimus explicabo eveniet rerum,
                    iusto accusamus veniam. Quaerat corporis facilis veniam minima.
                </p>
            </div>

            <div className="section-comment">
                <h2>Đánh giá sản phẩm</h2>
                <form action="#">
                    <div className="comment-rating">
                        <AiOutlineStar className="star"/>
                        <AiOutlineStar className="star"/>
                        <AiOutlineStar className="star"/>
                        <AiOutlineStar className="star"/>
                        <AiOutlineStar className="star"/>
                    </div>
                    <textarea placeholder="Your opinion..."></textarea>
                    <div className="comment-btn-group">
                        <button type="submit" className="btn-submit-comment">Submit</button>
                        <button className="btn-cancel-comment">Cancel</button>
                    </div>
                </form>

                <div className="comment-user">
                    <div className="comment_box">
                        <img className="media_man" src="/avatar-user.jpg" alt="" />
                        <div className="media-body">
                            <div className="custom_flex">
                                <h5 className="custom_para">Diego Fou | <span>jan 06 2020</span></h5>
                                <a className="reply_text" href="#"><i className="fas fa-reply"></i></a>
                            </div>
                            <p className="blog_details_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</p>
                            <div className="comment_box">
                                <img className="media_man" src="/avatar-user.jpg" alt="" />
                                <div className="media_body">
                                    <div className="custom_flex">
                                        <h5 className="custom_para">Diego Fou | <span>jan 06 2020</span></h5>
                                        <a className="reply_text" href="#"><i className="fas fa-reply"></i></a>
                                    </div>
                                    <p className="blog_details_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="comment_box">
                        <img class="media_man" src="/avatar-user.jpg" alt=""/>
                        <div class="media-body">
                            <div class="custom_flex">
                                <h5 class="custom_para">Diego Fou | <span>jan 06 2020</span></h5>
                                <a class="reply_text" href="#"><i class="fas fa-reply"></i></a>
                            </div>
                            <p class="blog_details_para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utx gh labore et dolor magna ali Ut enim ad minim veniam, quis nostrud exercitation .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail