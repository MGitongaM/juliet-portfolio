import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-me" className="">
      <div className="min-h-screen container mx-auto px-4 py-20 lg:py-30">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">About Me</h2>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-evenly items-center gap-10 ">
          <div className="w-full md:w-6/12 -mt-20 md:mt0">
            <Image
              src="/imgs/Juliet Ndungu 1.png"
              height={800}
              width={8000}
              alt="Miss Juliet Ndungu"
              className="object-contain rounded-full h-[40rem] "
            />
          </div>
          <div className="w-full md:w-6/12 text- lg:text-2xl  space-y-6 -mt-30 md:mt0">
            <p className="c">
              Hi, I&apos;m Juliet Ndungu, your dedicated personal assistant with
              a passion for making life easier one task at a time.
            </p>
            <p className="c">
              With 3+ years of experience supporting busy professionals,
              entrepreneurs, and creatives, I specialize in helping you stay
              focused on what matters most by handling what doesn&apos;t.
            </p>
            <p className="c">
              Whether it&apos;s managing your schedule, booking travel,
              organizing home logistics, or running errands, I bring calm to
              chaos and structure to overwhelm, always with discretion, care,
              and a smile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
