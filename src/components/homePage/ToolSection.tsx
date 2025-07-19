import { toolsEntries } from "@/constData/toolsSection";
import Image from "next/image";

export default function ToolSection() {
  return (
    <section id="tools" className="c">
      <div className="min-h-screen container mx-auto px-4 py-16 lg:py-30">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">My Tools of Work</h2>
        </div>

        <div className="space-y-4 py-10 md:py-20">
          <div className="w-full md:w-4/12 md:mr-auto ">
            <p className="text-xl">
              I work with tools that keep us efficient and connected
            </p>
          </div>
          <div className=" max-w-6xl mx-auto md:py-5">
            <div className=" flex flex-wrap justify-evenly items-center gap-4">
              {toolsEntries.map((entry) => (
                <div
                  key={entry.id}
                  className=" border grid place-content-center text-center w-44 md:w-40 lg:w-64 min-h-48 rounded-lg px-1 py-4"
                >
                  <Image
                    src={entry.img[0]}
                    height={400}
                    width={400}
                    alt={`${entry.title} logo`}
                    className="object-cover h-18 w-18 mx-auto"
                  />
                  <div className="mt-4">
                    <p className="font-semibold">{entry.title}</p>
                    <p className="text-sm">{entry.subTitle}</p>
                  </div>
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
