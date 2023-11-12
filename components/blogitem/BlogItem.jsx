import Image from 'next/image'
import Link from 'next/link'
import "./blogitem.css"

const BlogItem = () => {
    return (
        <div className="blogItem-container">

            <div className="blogItem-card">
                
                <Link href="/">
                    <img src="/blogs/blog-1.jpg" alt="blog-1" className="blogItem-banner"/>
                </Link>

                <div className="blogItem-content">
                    <Link href="/" className="blogItem-category">Sofa</Link>

                    <Link href="/">
                        <h3 className="blogItem-title">
                            When You Use a Transitional Furniture Style
                        </h3>
                    </Link>

                    <p className="blogItem-meta">
                        By <cite>Mr Admin</cite> / <span className="blogItem-time">Apr 06, 2022</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default BlogItem