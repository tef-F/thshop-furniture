import Link from "next/link"
import "./pageProduct.css"
import { IoCloseOutline } from "react-icons/io5"

const PageProduct = () => {
    return (
        <div className="page-product">
            <div className="filter-sidebar">
                <div className="filter-wrap">
                    <Link href="/" className="close-trigger">
                        <IoCloseOutline />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PageProduct