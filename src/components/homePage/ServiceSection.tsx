import {
  servicesDoneEntries,
  servicesEntries,
} from "@/constData/serviceSection";
import { SquareActivityIcon, SquareCheck } from "lucide-react";

export default function ServiceSection() {
  return (
    <section className="c">
      <div className="min-h-screen container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Service Offer</h2>
        </div>
        <div className="flex justify-between items-start gap-10 py-20">
          <div className="w-full md:w-6/12 h-full md:min-h-[32rem] bg-slate-200 rounded-xl px-4 py-8">
            <p className="text-3xl">
              Here&apos;s how I can help simplify your day-to-day:
            </p>
            <ul className="list-none text-xl py-20 px-8 space-y-4">
              {servicesEntries.map((entry) => (
                <li key={entry.id} className="flex items-center gap-2">
                  <SquareActivityIcon size={20} className="text-blue-400" />
                  {entry.name}
                </li>
              ))}
            </ul>
            {/* <p className="text-3xl">
              Need something specific? Let&apos;s chat about your unique needs.
            </p> */}
          </div>
          <div className="w-full md:w-6/12 h-full md:min-h-[32rem] bg-slate-200 rounded-xl px-4 py-8">
            <p className="text-3xl">
              Just a few ways I&apos;ve helped my clients:
            </p>
            <ul className="list-none text-xl py-20 px-8 space-y-4">
              {servicesDoneEntries.map((entry) => (
                <li key={entry.id} className="flex items-center gap-2">
                  <SquareCheck size={20} className="text-lime-400" />
                  {entry.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-3xl text-center -mt-10">
          Need something specific? Let&apos;s chat about your unique needs.
        </p>
      </div>
    </section>
  );
}
