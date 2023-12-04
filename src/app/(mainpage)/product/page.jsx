import Link from "next/link"
import "./pageProduct.css"
import { IoChevronDownOutline, IoCloseOutline } from "react-icons/io5"
import ProductItem from "../../../../components/productitem/ProductItem"
import Filter from "../../../../components/filter/Filter"


const PageProduct = () => {
    return (
        <div className="page-product">
            
            <div className="sidebar">
                <h1>Filter</h1>
                <div className="pro-filter">
                    <Filter />
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