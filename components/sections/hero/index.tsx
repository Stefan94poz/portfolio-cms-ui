import Image from "next/image";
import classes from "./styles.module.scss";

const Hero = () => {
  return (
    <>
      <section className={`bg-white dark:bg-gray-900 ${classes.hero}`}>
        <Image
          src="/hero.svg"
          alt="mockup"
          width={500}
          height={500}
          className={classes.heroImage}
        />
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 z-10">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <h2 className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Hey there!
              <br /> Im Martin Solonick Independent <span>Frelencer</span>
            </h2>
            <a
              href="#"
              className="inline-flex items-start justify-start px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Hire me
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex relative">
            <Image
              src="/img-1.png"
              alt="mockup"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
