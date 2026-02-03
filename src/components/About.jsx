import React from "react";
import CodeIcon from "./ui/CodeIcon";
import { useTheme } from "./theme-provider";
import FadeContent from "./flowBits/FadeContent";
import AnimatedContent from "./flowBits/AnimatedContent";

export const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`w-[80%] max-sm:w-[90%] max-md:w-[85%] m-auto my-20 py-10 grid grid-cols-[1fr_2fr] max-[850px]:grid-cols-1 gap-6 rounded-4xl px-10 max-sm:px-5 shadow-[var(--custom-shadow)] ${
        theme === "light" ? "bg-[#f0f0f3]" : "bg-[#575555]"
      }`}
    >
      {/* LEFT */}
      <div className="flex flex-col gap-8">
        <AnimatedContent direction="horizontal" reverse duration={0.8}>
          <h1 className="font-bold text-2xl min-[850px]:hidden">
            About Me
          </h1>
        </AnimatedContent>

        <AnimatedContent direction="vertical" duration={0.8}>
          <div className="relative h-36 w-36 rounded-full bg-[var(--soft-gray)] shadow-[var(--custom-shadow)]">
            <img
              src="/photos/sara.png"
              alt="Sara Lachgar"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
        </AnimatedContent>

        {/* Roles */}
        <div className="flex flex-col gap-4 max-[850px]:hidden">
          <AnimatedContent direction="vertical" delay={0.1}>
            <div
              className={`flex items-center gap-4 rounded-xl px-5 py-2 shadow-sm ${
                theme === "light" ? "bg-[var(--soft-gray)]" : "bg-[#676464]"
              }`}
            >
              <CodeIcon className="size-6" />
              <p className="font-semibold">Web Developer</p>
            </div>
          </AnimatedContent>

          <AnimatedContent direction="vertical" delay={0.2}>
            <div
              className={`flex items-center gap-4 rounded-xl px-5 py-2 shadow-sm ${
                theme === "light" ? "bg-[var(--soft-gray)]" : "bg-[#676464]"
              }`}
            >
              <p className="font-semibold">Software Engineering Student</p>
            </div>
          </AnimatedContent>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <AnimatedContent direction="horizontal" reverse duration={0.8}>
          <h1 className="font-bold text-2xl max-[850px]:hidden">
            About Me
          </h1>
        </AnimatedContent>

       <FadeContent blur duration={1000} delay={200}>
  <p className="text-justify mt-4 leading-relaxed">
    I am a passionate software engineering student with a focus on web development,
    dedicated to creating seamless and innovative digital experiences. I thrive on
    turning complex problems into elegant, user-friendly solutions, combining both
    creativity and technical expertise.
    <br /><br />
    Throughout my academic journey and hands-on projects, I have gained solid experience
    with modern technologies including React, Laravel, PHP, MySQL, and MongoDB. I am
    committed to continuous learning and contributing to projects that push the boundaries
    of technology while making a meaningful impact.
    <br /><br />
    My mission is to grow as a developer, collaborate with forward-thinking teams, and
    craft applications that are both functional and visually engaging.
  </p>
</FadeContent>

      </div>

      {/* MOBILE ROLES */}
      <div className="flex flex-col gap-4 min-[850px]:hidden">
        <div
          className={`flex items-center gap-4 rounded-full px-5 py-2 shadow-sm ${
            theme === "light" ? "bg-[var(--soft-gray)]" : "bg-[#676464]"
          }`}
        >
          <CodeIcon className="size-5" />
          <p className="font-semibold text-sm">Web Developer</p>
        </div>

        <div
          className={`flex items-center gap-4 rounded-full px-5 py-2 shadow-sm ${
            theme === "light" ? "bg-[var(--soft-gray)]" : "bg-[#676464]"
          }`}
        >
          <p className="font-semibold text-sm">
            Software Engineering Student
          </p>
        </div>
      </div>
    </section>
  );
};
