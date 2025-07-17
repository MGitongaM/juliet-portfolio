import { socialLinks } from "@/constData/toolsSection";
import Link from "next/link";


export default function FooterSection() {
  return (
    <section className="bg-lime-950">
        <div className="container mx-auto px-8 py-20">
            <div className="grid place-content-center text-center text-slate-100 space-y-4 ">
                <p className="text-sm">Email: julietndungu.w@gmail.com</p>
                <p className="text-xs hidden">Social Links</p>
                <div className="flex justify-center items-center gap-8">
                    {socialLinks.map((social)=>(
                        <div key={social.id}>
                            <Link target="_blank" href={social.link} >
                            <span className=" block hover:scale-110 transition duration-700">
                            {social.icon}
                            </span>
                            </Link>
                        </div>
                    ))}
                </div>
                <p className="text-sm">copyright &#169; { new Date().getFullYear()}</p>
            </div>
        </div>
    </section>
  )
}
