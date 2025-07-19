import Image from "next/image";
import CTAButton from "../CTAButton";
// import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="c">
      <div className="min-h-screen container mx-auto px-4">
        <div className="py-10">
          <h1 className="text-3xl lg:text-6xl text-center font-bold ">
            I&apos;m <span className="">Juliet,</span> <br /> Executive Virtual
            Assistant
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-end gap-8 lg:-mt-8">
          <div className="w-12/12 mx-auto space-y-6 ">
            <div className=" space-y-6">
              <p className="text-2xl md:text-4xl font-s">
                Your Right Hand for a Smoother Life
              </p>
              <p className="text-">
                This is the space where creativity meets efficiency, and your
                to-do list finally meets its match.
              </p>
              {/* <p className="text-">
                Efficient, Reliable, Discreet. Get more done with a personal
                assistant who understands the details that matter.
              </p> */}
            </div>
          </div>
          <div className="w-[200rem] mx-auto flex flex-col justify-center items-center gap-4 ">
            <Image
              src="/imgs/Juliet Ndungu 2.png"
              height={800}
              width={8000}
              alt="Miss Juliet Ndungu"
              // className="object-contain md:object-cov lg:object-contain  h-auto md:h-[30rem] lg:h-[40rem] w-full -mt-10"
              className="object-contain md:object-cover lg:object-contain  h-auto md:h-[30rem] lg:h-[35rem] w-full"
            />
          </div>
          <div className="w-12/12 mx-auto  space-y-4 lg:space-y-20">
            <p className="text-xl md:-mt-40 ">
              {" "}
              3 + <br />
              Years of Executive Assistant{" "}
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}
