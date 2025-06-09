import HeroImg from "../../assets/hero.png";
import { useTheme } from "../../provider/page";
import OlovaLogo from "../../assets/spring_boot.png";

export default function About() {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="about"
        className={`py-16 md:py-32 ${
          theme === "dark"
            ? "bg-[#090f1c] text-white"
            : "bg-white text-gray-900"
        }`}
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            className={`relative z-10 max-w-xl text-4xl font-medium lg:text-5xl ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
Engineer, Architect, Builder, Visionary          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div
                className={`bg-linear-to-b aspect-76/59 relative rounded-2xl p-px ${
                  theme === "dark" ? "from-zinc-700" : "from-zinc-300"
                } to-transparent`}
              >
                <img
                  src={HeroImg}
                  className={`rounded-[15px] ${
                    theme === "dark" ? "block" : "hidden"
                  }`}
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src={HeroImg}
                  className={`rounded-[15px] shadow ${
                    theme === "dark" ? "hidden" : "block"
                  }`}
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
              Hello! I'm Sandeep Reddy, a passionate Java Backend Developer 
              with expertise in building scalable web solutions and optimizing 
              backend performance. I specialize in designing robust APIs, 
              managing databases, and ensuring seamless communication between 
              frontend and backend systems to enhance user experience.{" "}
                <span
                  className={`font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
As a backend specialist focusing on Java technologies
</span>
, I'm dedicated to enhancing **server-side functionality**.
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                   My focus is on **creating optimized backend solutions** that power scalable applications.
    Currently, I'm expanding my knowledge in **microservices and cloud computing** to grow as a **well-rounded backend developer** and build high-performance web applications.
              </p>

              <div className="pt-6">
                <blockquote
                  className={`border-l-4 ${
                    theme === "dark" ? "border-gray-700" : "border-gray-300"
                  } pl-4`}
                >
                  <p
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }
                  >
                   I'm a **dedicated backend engineer**, driven by a desire to **optimize application performance** and contribute **efficient backend solutions** to the developer community. As a **Java enthusiast**, I'm constantly refining my skills to build **reliable and scalable backend architectures**.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite
                      className={`block font-medium ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Sandeep Reddy,
                       Java Backend Developer
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className={`h-5 w-fit ${theme === "dark" ? "" : ""}`}
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span>Spring Boot</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
