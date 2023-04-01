import Image from "next/image";
import a from "../public/a.jpg";
import Logo from "../components/Logo/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={a} alt="Hero" fill className="absolute" />
      <div className="relative mt-64 z-10 text-white px-10 py-5 text-center max-w-screen-sm rounded-md ">
        <Logo />
        <Link
          className="bg-green-500 tracking-wider w-full text-center text-white font-bold cursor-pointer uppercase px-4 py-2 rounded-md hover:bg-green-600 transition-colors block mt-3"
          href="/post/new"
        >
          Begin
        </Link>
      </div>
    </div>
  );
}
