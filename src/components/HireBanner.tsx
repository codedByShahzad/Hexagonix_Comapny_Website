import Image from "next/image"
import hb1 from "../assets/hb_1.png"
import hb2 from "../assets/hb_2.png"
import Link from "next/link"

const HireBanner = () => {
  return (
    <section className="my-20 mx-4 py-8 px-6 sm:py-16 sm:px-16 max-w-7xl sm:mx-auto flex flex-col sm:flex-row justify-between items-center bg-gradient-to-tr from-[#E4ECF7] to-[#F1F1F5] rounded-3xl gap-10 sm:gap-0 ">
      <h1 className="text-xl sm:text-4xl text-center sm:text-start leading-relaxed font-bold max-w-lg sm:max-w-xl ">Hire the best developers and designers around!</h1>
      <div className="flex flex-col gap-4 justify-center items-center">
        <Image src={hb1} alt="img" className="w-[80px] sm:w-[100px] " />
        <Link href={"/contact"}>
        <button className="px-4 py-2 sm:px-8 sm:py-4 text-white bg-gradient-to-tr from-[#F16063] to-[#FFC656] rounded-lg sm:font-semibold ">
          Hire Top Developers
        </button>
        </Link>
        <Image src={hb2} alt="img" className="w-[80px] sm:w-[100px] " />
      </div>
    </section>
  )
}

export default HireBanner