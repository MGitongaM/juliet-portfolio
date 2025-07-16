import { clientTestimonial, experienceEntries } from "@/constData/experienceSection";
import { SquareAsterisk } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function ExperienceSection() {
  return (
    <section className="c">
      <div className="min-h-screen container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold pb-8">My work Experience</h2>
        </div>
        <div className="w-full md:w-8/12 mx-auto h-full md:min-h-[32rem] bg-slate-100 rounded-xl px-4 pt-8">
          <p className="text-3xl text-center">
            I&apos;ve supported clients from a range of industries, including:
          </p>
          <div className=" text-xl py-10 px-8 space-y-12">
            {experienceEntries.map((entry) => (
              <div key={entry.id} className="c">
                <p className="font-bold pb-8">{entry.compnayName}</p>

                <ul className="list-none space-y-4">
                  {entry.details.map((detail, indx) => (
                    <li
                      key={indx}
                      className=" text-base flex items-center gap-2"
                    >
                      <SquareAsterisk size={20} className="text-lime-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="py-20">
          <p className="text-3xl text-center">What Clients Say:</p>
          <div className="flex justify-between items-center gap-10 py-10">
            {clientTestimonial.map((client)=>(
            <div key={client.id} className="w-full md:w-6/12 border rounded-xl px-4 py-8 ">
                <div className="flex justify-between items-center gap-4">
                    <Image src={client.image} height={400} width={400} alt="client image" className="rounded-full size-20 bg-slate-400"/>
                    <div className="w-full md:w-8/12 space-y-6">
                        <p className="italic font-semibold">&quot;{client.quote}&quot;</p>
                        <p className="c">{client.client}</p>
                    </div>
                </div>
            </div>

            ))}
          </div>
          <div className="pt-10 flex flex-col justify-center items-center gap-8">
            <p className="text-3xl text-center">Ready to hand off the busywork and focus on what you do best?</p>
            <Button className="text-xl hover:scale-110 transition duration-700">
                    Let&apos;s Get Started
                </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
