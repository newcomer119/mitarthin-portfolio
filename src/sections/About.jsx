import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Engineering student at UPES
    I design AI-driven systems and full-stack products
    Focused on real-world impact and rapid execution`;
  const aboutText = `I’m Mitarth Pandey, pursuing Electronics & Computer Engineering at UPES, Dehradun. I enjoy turning cutting-edge research into usable products—whether that’s building genomic AI pipelines or launching real-time web platforms.

My toolkit blends AI/ML and product engineering: Python, JavaScript/TypeScript, C++, Java; PyTorch, LangChain, Hugging Face; React, Next.js, Tailwind, shadcn/ui; Node.js, Express, FastAPI, Prisma; MongoDB, Supabase, Firebase; AWS, Vercel, Modal, Docker.

When I’m not shipping:
⚡️ Prototyping open-source AI tools or jumping into a friend’s build
🎥 Sharing dev workflows live so more builders can learn faster
🧗 Tackling new climbing routes to keep the problem-solving skills sharp
🎸 Exploring new technologies and frameworks while deployment pipelines do their thing

Beyond the tech, I thrive on rapid prototyping, cross-disciplinary teamwork, and delivering experiences that feel crafted end-to-end.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Cod with purpose, Built to scale"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About; 
