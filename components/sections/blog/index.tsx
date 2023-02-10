import Image from "next/image";
import classes from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { useEffect, useState } from "react";
import BlogCard from "./blogCard";
import { PostI } from "../../../constants/interface";

const Blog = ({ posts }: any) => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    setBlog(
      posts?.map((post: PostI) => (
        <SwiperSlide key={post.id}>
          <BlogCard post={post} />
        </SwiperSlide>
      ))
    );
  }, [posts]);

  return (
    <>
      <div className={`${classes.blog}`}>
        <div className="container m-auto">
          <h2 className="text-center  py-8 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            News And Updates
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {blog}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Blog;
