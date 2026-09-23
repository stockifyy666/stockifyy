import Image from "next/image";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function StaffAvatar({
  name,
  photo,
  size = 128,
}: {
  name: string;
  photo?: string;
  size?: number;
}) {
  if (photo) {
    return (
      <div
        className="relative shrink-0 overflow-hidden rounded-full border-4 border-gold/30 shadow-lg bg-[#E8DDC8]"
        style={{ width: size, height: size }}
      >
        <Image
          src={photo}
          alt={name}
          fill
          // Request roughly 2x the display size so the circle stays
          // sharp on retina/high-DPI screens instead of looking blurry.
          sizes={`${size * 2}px`}
          quality={95}
          priority
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full border-4 border-gold/30 bg-gradient-to-br from-gold to-goldDeep text-white font-display font-bold shadow-lg"
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {getInitials(name)}
    </div>
  );
}
