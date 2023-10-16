import Image from 'next/image'
import Link from 'next/link'
import "./blogitem.css"

const BlogItem = () => {
    return (
        <div className="blog-container">

            <div className="blog-card">
                
                <Link href="/">
                    <img src="./blogs/blog-1.jpg" alt="blog-1" className="blog-banner"/>
                </Link>

                <div className="blog-content">
                    <Link href="/" className="blog-category">Sofa</Link>

                    <Link href="/">
                        <h3 className="blog-title">
                            When You Use a Transitional Furniture Style
                        </h3>
                    </Link>

                    <p className="blog-meta">
                        By <cite>Mr Admin</cite> / <span className="blogg-time">Apr 06, 2022</span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default BlogItem