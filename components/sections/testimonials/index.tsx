import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import classes from "./styles.module.scss";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <>
      <section className={`${classes.testimonials} g-white dark:bg-gray-900 `}>
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 relative">
          <div className="relative">
            <Image
              className="w-full dark:block"
              src="testimonial.svg"
              alt="dashboard image"
              width={250}
              height={250}
            />
          </div>
          <div className="mt-4 md:mt-0 max-w-lg">
            <h6>What I do ?</h6>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              CUSTOMER FEEDBACK
            </h2>
            <Swiper
              slidesPerView={1}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
            >
              <SwiperSlide>
                <p>
                  Tidio has given our clients a quick and easy way to send over
                  thoughts and questions without delay or wait time! No second
                  guessing – just asked and answered quickly in order to make
                  their purchasing decisions easier!
                </p>
                <div className={classes.avatar}>
                  <Image
                    className="rounded-full"
                    src="/avatar.jpg"
                    alt="avatar"
                    width={56}
                    height={59}
                  />
                  <div className={classes.avatarName}>
                    <h6>Zivana Zivkovic</h6>
                    <span>Direktorka Lidla</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <p>
                  Tidio has given our clients a quick and easy way to send over
                  thoughts and questions without delay or wait time! No second
                  guessing - just asked and answered quickly in order to make
                  their purchasing decisions easier!
                </p>
                <div className={classes.avatar}>
                  <Image
                    className="rounded-full"
                    src="/avatar.jpg"
                    alt="avatar"
                    width={56}
                    height={59}
                  />
                  <div className={classes.avatarName}>
                    <h6>Miroslava Dragomirovic</h6>
                    <span>Menagerka Cigatrona</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
