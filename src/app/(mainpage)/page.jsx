import BlogItem from "../../../components/blogitem/BlogItem";
import Categories from "../../../components/categories/Categories";
import ProductItem from "../../../components/productitem/ProductItem";
import Slide from "../../../components/slide/Banner";
import Testimonial from "../../../components/testimonial/Testimonial";

import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div>
      <Slide />
      <Categories />

      <div className={styles.productMain}>
        <h2 className={styles.contentProduct}>New Product</h2>
        <div className={styles.productGrid}>
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

      <div className={styles.testimonial}>
        <Testimonial />
      </div>

      <div className={styles.blog}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>

    </div>
  )
}
