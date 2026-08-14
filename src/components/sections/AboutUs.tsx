import Image from "next/image";
import teamoffice from "../../../public/images/officeteam.png"

export default function AboutUs() {
  return (
   <div className="bg-[#FFFDF7]">
     <section id="about" className="max-w-content  mx-auto px-6 md:px-10 py-24 md:py-24">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className="relative aspect-[4/3] w-full order-2 md:order-1">
          <Image
            src={teamoffice}
            alt="Stockify Advisory office"
            fill
            className="object-cover rounded-3xl"
            sizes="(min-width: 768px) 50vw, 90vw"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="case-index font-display text-ink font text-lg mb-4">About Us</p>
          <h2 className="font-display text-3xl md:text-[44px] text-ink leading-tight mb-6">
            
           Clarity, Discipline and Values <span className="text-gradient-gold"> in Every Decision</span>
          </h2>
          <div className="font-sans text-slate leading-relaxed space-y-5">
            <p>
              Stockifyy is an SECP-licensed financial advisory focused on helping investors navigate the Pakistan Stock Exchange with greater clarity and discipline.

{/* We believe successful investing is not built on speculation or short-term noise. It requires quality research, responsible risk management and a strategy that reflects each investor’s goals and circumstances. */}

            </p>


            <p>
            Our advisory is built entirely around Shariah-compliant investment opportunities.
             Whether you are entering the market for the first time or managing an established 
             portfolio, we help you understand your investments, make informed decisions and
              build long-term wealth without compromising your values.



            </p>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
}
