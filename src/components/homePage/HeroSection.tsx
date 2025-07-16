import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="c">
      <div className="min-h-screen container mx-auto px-4">
        <div className="py-10">
          <h1 className="text-7xl text-center font-semibold">
            I&apos;m <span className="">Juliet</span> <br /> Executive Virtual
            Assistant
          </h1>
        </div>
        <div className="flex justify-between items-end gap-8">
          <div className="w-4/12 space-y-6">
            <p className="text-4xl">Your Right Hand for a Smoother Life</p>
            <p className="text-2xl">
              Efficient. Reliable. Discreet. Get more done with a personal
              assistant who understands the details that matter.
            </p>
          </div>
          <div className="w-4/12 flex flex-col justify-center items-center gap-4">
            <Image
              src="/imgs/Juliet Ndungu.jpeg"
              height={800}
              width={8000}
              alt="Miss Juliet Ndungu"
              className="object-cover rounded-4xl h-[40rem]"
            />

            <Button className="text-xl hover:scale-110 transition duration-700">
                Let&apos;s Get Started
            </Button>
          </div>
          <div className="w-4/12">
            <p className="text-2xl"> 3 + Years of Executive Assistant </p>
          </div>
        </div>
      </div>
    </section>
  );
}
