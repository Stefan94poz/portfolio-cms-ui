import Image from "next/image";
import classes from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { useEffect, useState } from "react";
import ProjectCard from "../projectCard";

interface ProjectI {
  id: string;
  name: string;
  stack: string[];
  packages: string[];
  github: string;
  description: string;
  devId: string;
  createdAt: string;
  updatedAt: string;
}

const MyWork = ({ data }: any) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(
      data?.map((project: ProjectI) => (
        <SwiperSlide key={project.id}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))
    );
  }, [data]);

  return (
    <>
      <div className={`container m-auto ${classes.myWork}`}>
        <h2 className="text-center  py-8 mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          MyWork
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {projects}
        </Swiper>
      </div>
    </>
  );
};

export default MyWork;
