import {
  servicesDoneEntries,
  servicesEntries,
} from "@/constData/serviceSection";
import { SquareActivityIcon, SquareCheck } from "lucide-react";
import CTAButton from "../CTAButton";

export default function ServiceSection() {
  return (
    <section id="services" className="bg-[url(/imgs/circlespartten.png)] bg-cover bg-center bg-no-repeat">
      <div className="bg-slate-100/85">
        <div className="min-h-screen container mx-auto px-4 py-16 lg:py-10 ">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Service Offer</h2>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-10 py-10 md:py-20">
            <div className="w-full lg:w-6/12 h-full md:min-h-[36rem] bg-slate-50  rounded-xl px-8 py-12">
            <div className="bg-slate-200 h-full md:min-h-[44rem] rounded-xl hover:shadow-2xl hover:scale-105 transition duration-700 px-4 pt-8">
              <p className="text-xl">
                Here&apos;s how I can help simplify your day-to-day:
              </p>
              <ul className="list-none text-xl py-10  lg:px-8 space-y-4">
                {servicesEntries.map((entry) => (
                  <li key={entry.id} className="grid grid-cols-12 items-center gap-1">
                    <SquareActivityIcon  className="col-span-1 size-4 text-blue-400" />
                    <p className=" col-span-11 text-sm">
                    {entry.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            </div>
            <div className="w-full lg:w-6/12 h-full md:min-h-[36rem] bg-slate-50  rounded-xl px-8 py-12">
            <div className="bg-slate-200 h-full md:min-h-[44rem] rounded-xl hover:shadow-2xl hover:scale-105 transition duration-700 px-4 pt-8">
              <p className="text-xl">
                Just a few ways I&apos;ve helped my clients:
              </p>
              <ul className="list-none text-xl py-10  lg:px-8 space-y-4">
                {servicesDoneEntries.map((entry) => (
                  <li key={entry.id} className="grid grid-cols-12  items-center gap-1">
                    <SquareCheck  className="col-span-1 size-4 text-green-500" />
                    <p className="col-span-11 text-sm">
                    {entry.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
          <p className="text-2xl lg:text-3xl text-center font-semibold -mt-10">
            Need something specific? Let&apos;s chat about your unique needs.
          </p>
          <div className="grid place-content-center mt-8">
            <CTAButton/>
          </div>
        </div>
      </div>
    </section>
  );
}
