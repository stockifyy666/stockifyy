import Image from "next/image";
import teamoffice from "../../../public/images/officeteam.jpeg"

export default function AboutUs() {
  return (
   <div className="bg-[#FFFDF7]">
     <section id="our-story" className="max-w-content  mx-auto px-6 md:px-10 py-24 md:py-24">
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
          <p className="case-index font-display text-ink font text-lg mb-4">Our Story</p>
          <h2 className="font-display text-3xl md:text-[44px] text-ink leading-tight mb-6">
            
           Clarity, Discipline and Values <span className="text-gradient-gold"> in Every Decision</span>
          </h2>
          <div className="font-sans text-slate leading-relaxed space-y-5">
            <p>
              Humari kahani ek simple sawaal se shuru hui — Pakistan mein itne log mehnat se paise kamate hain, lekin invest karna kisi ke liye bhi aasan nahi tha. Koi trust nahi, koi sahi guidance nahi, aur halal options ke baare mein toh koi baat hi nahi karta tha.
            </p>
            <p>
              Stockifyy woh jagah hai jo hum chahte the ke pehle exist karti — jahan aap PSX mein invest karein, apni values se compromise kiye bina, aur kisi ایسے insaan ki madad se jo actually samjhata ho ke aapke liye kya sahi hai. SECP-certified, Shariah-compliant, aur sach mein aapki taraf.
            </p>
          </div>
        </div>
      </div>
    </section>
   </div>
  );
}
