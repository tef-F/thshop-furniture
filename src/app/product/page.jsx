import Link from "next/link"
import "./pageProduct.css"
import { IoChevronDownOutline, IoCloseOutline } from "react-icons/io5"
import ProductItem from "../../../components/productitem/ProductItem"


const PageProduct = () => {
    return (
        <div className="page-product">
            <div className="filter-sidebar">
                <div className="filter-wrap">
                    <Link href="/" className="close-trigger">
                        <IoCloseOutline />
                    </Link>
                    <div className="filter-content">
                        <div className="filter-title">Filter</div>
                        <div className="widget">
                            <div className="summary">
                                <input type="checkbox" name="cats" id="aaa"/>
                                <label for="aaa">
                                    <span>Rooms</span>
                                    <i><IoChevronDownOutline /></i>
                                </label>
                                <div className="accord list-block">
                                    <ul className="sidebar-category-list">
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Living Room</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Bathroom</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Bedroom</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Kitchen</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="widget">
                            <div className="summary">
                                <input type="checkbox" name="cats" id="aab" />
                                <label for="aab">
                                    <span>Categories</span>
                                    <i><IoChevronDownOutline /></i>
                                </label>
                                <div className="accord list-block">
                                    <ul className="category-list">
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Sofa</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Gaming</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Armchair</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Long Sofa</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Single Chair</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="widget">
                            <div className="summary">
                                <input type="checkbox" name="cats" id="aac" />
                                <label for="aac">
                                    <span>Price</span>
                                    <i><IoChevronDownOutline /></i>
                                </label>
                                <div className="accord list-block">
                                    <ul className="category-list">
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Under 300$</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Under 500$</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Under 1000$</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Under 2000$</Link>
                                        </li>
                                        <li>
                                            <Link className="sidebar-category-item" href="/">Under 3000$</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="griddot">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}

export default PageProduct