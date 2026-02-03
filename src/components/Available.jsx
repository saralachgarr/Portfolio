import { Phone } from "lucide-react";
import React from "react";
import { useTheme } from "./theme-provider";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Contact } from "./Contact";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AnimatedContent from "./flowBits/AnimatedContent";
import TextType from "./flowBits/TextType";
import FadeContent from "./flowBits/FadeContent";

export const Available = () => {
  const { theme } = useTheme();

  return (
    <section className="flexy flex-col gap-6 pb-20">
      {/* Availability Badge */}
      <AnimatedContent
        distance={20}
        direction="vertical"
        duration={0.8}
        initialOpacity={0}
        animateOpacity
        delay={0.1}
      >
        <div
          className={`flexy h-11 max-h-11 font-bold text-base rounded-full px-6 shadow-[var(--custom-shadow)] ${
            theme === "light" ? "bg-[#16a34a17]" : "bg-[#00bf6340]"
          }`}
        >
          <span
            className={`pulse relative w-2 aspect-square rounded-full mr-4 ${
              theme === "light" ? "bg-green-600" : "bg-green-400"
            }`}
          >
            <span
              className={`absolute inset-0 rounded-full animate-ping [animation-delay:3s] [animation-duration:1.5s] ${
                theme === "light" ? "bg-green-600" : "bg-green-400"
              }`}
            ></span>
          </span>
          <p className="max-sm:text-sm">Available for exciting projects</p>
        </div>
      </AnimatedContent>

      {/* Typewriter Text */}
      <TextType
        text={`Let's create engaging web experiences\nand bring innovative projects to life!`}
        className="font-bold text-2xl max-sm:text-xl text-center whitespace-pre-line"
        typingSpeed={70}
        deletingSpeed={60}
        pauseDuration={3000}
        showCursor={true}
        loop={false}
        cursorCharacter=""
      />

      {/* Polished Intro Paragraph */}
      <FadeContent
        blur={true}
        duration={1100}
        easing="ease-out"
        initialOpacity={0}
      >
        <p className="text-center text-lg max-sm:text-base leading-relaxed">
          I am currently open to new opportunities where I can apply my skills 
          in web development and software engineering. I enjoy building 
          responsive, user-friendly applications and contributing to projects 
          that make a real impact.
          <br /><br />
          If you have an exciting project or opportunity, feel free to reach out 
          via email or the contact form below — I’d love to collaborate and bring ideas to life!
        </p>
      </FadeContent>

      {/* Email Link */}
      {/* Email Link */}
<FadeContent
  blur={true}
  duration={1100}
  easing="ease-out"
  initialOpacity={0}
>
  <a
    href="mailto:saralachgar01@gmail.com"
    className="bg-[#0072ff0a] pt-1 underline decoration-2 text-xl max-sm:text-base underline-offset-2"
  >
    saralachgar01@gmail.com
  </a>
</FadeContent>


      {/* Contact Sheet */}
      <Sheet>
        <Tooltip>
          <TooltipTrigger asChild>
            <SheetTrigger>
              <AnimatedContent
                distance={20}
                direction="vertical"
                duration={0.8}
                initialOpacity={0}
                animateOpacity
                delay={0.1}
              >
                <span
                  className={`h-11 w-11 max-sm:h-10 max-sm:w-10 cursor-pointer inline-flex items-center justify-center rounded-full shadow-[var(--custom-shadow)] ButtonHover ${
                    theme === "light" ? "bg-[#d9e2e9]" : "bg-[#00bf6354]"
                  }`}
                >
                  <Phone className="fill-[var(--icons-color)] stroke-[var(--icons-color)] size-5 max-sm:size-4.5" />
                </span>
              </AnimatedContent>
            </SheetTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Me</p>
          </TooltipContent>
        </Tooltip>
        <SheetContent side="bottom">
          <Contact />
        </SheetContent>
      </Sheet>
    </section>
  );
};
