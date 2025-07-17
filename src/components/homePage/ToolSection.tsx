import { toolsEntries } from "@/constData/toolsSection";
import Image from "next/image";

export default function ToolSection() {
  return (
    <section id="tools" className="c">
      <div className="min-h-screen container mx-auto px-4 py-16 lg:py-30">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">My Tools of Work</h2>
        </div>

        <div className="space-y-4 py-20">
          <div className="w-full md:w-4/12 md:mr-auto ">
            <p className="text-xl">
              I work with tools that keep us efficient and connected
            </p>
          </div>
          <div className=" max-w-5xl mx-auto ">
            <div className=" flex flex-wrap justify-evenly items-center gap-4">
              {toolsEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="w-full border grid place-content-center text-center md:w-64 rounded-lg px-4 py-8"
                >
                  <Image
                    src={entry.img[0]}
                    height={400}
                    width={400}
                    alt={`${entry.title} logo`}
                    className="object-cover size-18 mx-auto"
                  />
                  <p className="font-semibold">{entry.title}</p>
                  <p className="c">{entry.subTitle}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-4/12 md:ml-auto  ">
            <p className="text-xl">
              Tech savvy and adaptable. I can integrate into your existing
              systems or help you set them up from scratch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
