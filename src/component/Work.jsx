import { useMediaQuery } from "@uidotdev/usehooks";
import Sipta from "../assets/Sipta.svg";
import Hydrocare from "../assets/hydrocare.svg";

const data = [
  {
    link: "https://github.com/rizkisepriadi/HydroCare",
    picture: Hydrocare,
    title: "Hydrocare",
    desc: "Achieved 2nd place in Srifoton 2024 with a project focused on raising awareness about water conservation through interactive content and activities. As Team Leader and Full-Stack Developer, I designed and developed the system while collaborating with a UI/UX teammate.",
    tag: "MongoDB, ExpressJS, React, NodeJS, TailwindCSS",
  },
  {
    link: "https://github.com/rizkisepriadi/SIPTA",
    picture: Sipta,
    title: "Sistem Pendaftaran Tugas Akhir - Sipta",
    desc: "Sistem Pendaftaran Tugas Akhir is a system used to register student final projects. This system facilitates students in registering their final projects, as well as helping advisors in checking and approving student final project registrations.",
    tag: "Laravel, TailwindCSS, React, InertiaJS, MySQL",
  },
];

const tagArray = data.map((item) =>
  item.tag.split(",").map((tag) => tag.trim())
);

export default function Skill() {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {!isLargeScreen && (
        <>
          <div className="text-center flex justify-center mb-5 mt-11">
            <h1 className="text-base text-accent px-5 bg-secondary rounded-xl">
              Work
            </h1>
          </div>
          <h1 className="text-accent text-center text-xl">
            Some Best Projects that I have built
          </h1>
        </>
      )}
      <div className="mt-16 flex items-center flex-col lg:flex-row lg:justify-between ">
        {isLargeScreen && (
          <>
            <div className="px-5 bg-secondary text-center inline-block rounded-xl mb-5">
              <h1 className="text-sm text-accent">Work</h1>
            </div>
            <h1 className="text-accent text-center mb-6 lg:mb-0">
              Some Best Projects that I have built
            </h1>
          </>
        )}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:gap-8">
          {data.map((work, index) => (
            <div
              key={index}
              className={`pb-8 lg:flex ${
                index % 2 != 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="px-8 flex justify-center lg:p-12">
                <img
                  src={work.picture}
                  alt={work.title}
                  className="w-auto h-auto lg:size-full"
                />
              </div>
              <div className="lg:h-3/6 lg:w-3/6 lg:p-12">
                <div className="px-8 pt-8 lg:pt-0">
                  <a
                    className="text-accent font-bold lg:mt-0 lg:text-2xl lg:w-[422px] lg:mb-0 hover:text-neutral"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`${work.link}`}
                  >
                    {work.title}
                  </a>
                  <p className="text-neutral text-base py-3">{work.desc}</p>
                </div>
                <div className="flex flex-wrap flex-auto px-8">
                  {tagArray[index].map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-base text-accent px-5 bg-secondary rounded-xl m-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
