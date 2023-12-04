import Image from "next/image"

export const Logo = () => {
  return (
    <div className="flex items-center gap-[2]">
      <Image
        height={50}
        width={50}
        alt="logo"
        src="/logo.svg"
      />
      <span className="font-bold text-xl text-[#0369a1]">365LMS</span>
    </div>
  )
}