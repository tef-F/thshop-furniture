'use client'
import Link from "next/link";
import "./pageDetail.css"
import BlogItem from "../../../../../components/blogitem/BlogItem";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const BlogDetail = () => {
    return (
        <div className="blog-detail">
            <div className="blog-hero"></div>

            <main>
                <h2>Beauty of Furniture</h2>
                <div className="blog-detail-container">
                    <div className="blog-profile">
                        <div className="blog-img-container">

                        </div>
                        <div className="blog-profile-info">
                            <h3>Admin</h3>
                            <p>January 13, 2021</p>
                        </div>
                    </div>
                    <div className="blog-button">
                        <Link href="/" className="blog-btn">passion</Link>
                    </div>
                </div>

                <div className="blog-detail-content">
                    <p>
                        Communications inside Gaza have been down periodically since Israel’s military campaign began last month – often as a result of power shortages or widespread network outages.
                        Some context: There have been reports of Israeli attacks near Al-Shifa Hospital,
                        with hospital staff and the Palestinian Ministry of Health in Ramallah posting online videos appearing to show heavy bombing in the area surrounding the complex.
                    </p>
                    <p>
                        A World Health Organization (WHO) spokesperson said Friday that al-Shifa was “coming under bombardment,” adding that 20 hospitals in the Gaza Strip were “out of action.”
                        Asked about a potential Israeli airstrike on al-Shifa hospital on Friday, WHO spokeswoman Margaret Harris said in a briefing: “I haven’t got the detail on al-Shifa but we do know they are coming under bombardment.”
                        The Israeli military has claimed that a misfired projectile launched by terrorist organizations inside the Gaza Strip was responsible for an earlier strike on the hospital.
                    </p>
                    <h4>West Bank Palestinians face increasing restrictions</h4>
                    <p>
                        After Hamas launched its terror attack on Israel on October 7, killing more than 1,400 people and kidnapping some 240 others, Israel stepped up its security measures and began severely restricting the freedom of movement of Palestinian residents of the West Bank.
                        CNN has asked Israels Coordinator of Government Activities in the Territories (COGAT) for comment on the increased restrictions, but has not received a response.
                    </p>
                    <h4>Its morning in Gaza. Heres what you should know</h4>
                    <p>
                        The ferocity of Israels military operation shows no sign of letting up. On Friday, Israeli tanks surrounded a Gaza hospital, its director said, as the territorys
                        largest healthcare facility came under a reported “bombardment.” Meanwhile, the World Health Organization said it was extremely disturbed by reports of Israeli attacks near another Gaza hospital, Al-Shifa.
                    </p>
                    <blockquote>
                        Hit on another hospital: The World Health Organization says it is “extremely disturbed”
                        by reports of Israeli attacks near Gaza Citys Al-Shifa Hospital. The Hamas-run media office claims
                        the IDF carried out a strike on the hospital Friday. But the Israeli military has claimed that a misfired projectile launched by terrorist organizations inside Gaza was responsible.
                    </blockquote>
                    <div className="content-img-container">

                    </div>

                    <h4>Blog Image Desc</h4>

                    <p>
                        Adjusted Israeli death toll: Israel now believes around 1,200 people were killed by Hamas in a series of brutal attacks on Israeli communities and gatherings near Gaza on October 7.
                        The number includes foreign workers and other foreign nationalities  and is a downward revision from a previous figure of 1,400.
                        The current estimate is not final, because some of the bodies have yet to be identified.
                    </p>
                    <p>Thank for reading!</p>
                </div>
            </main>

            <div className="blog-popular">
                <h2>Popular Post</h2>
                <div className="blog-popular-container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        1280: {
                        slidesPerView: 4,
                        },
                        1024: {
                        slidesPerView: 3,
                        },
                        768: {
                        slidesPerView: 2,
                        },
                    }}
                    modules={[Pagination]}
                    >
                        <SwiperSlide><BlogItem /></SwiperSlide>
                        <SwiperSlide><BlogItem /></SwiperSlide>
                        <SwiperSlide><BlogItem /></SwiperSlide>
                        <SwiperSlide><BlogItem /></SwiperSlide>
                        <SwiperSlide><BlogItem /></SwiperSlide>
                        <SwiperSlide><BlogItem /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail;