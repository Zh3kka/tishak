import UpperMenu from "@/components/UpperMenu";
import Link from "next/link";

const LinkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="container mx-auto text-center my-10">
        <Link
          href="/"
          className="bg-transparent border border-black text-black px-6 py-3 rounded-2xl text-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white"
        >
          <span className="text-xl">←</span> Go to home
        </Link>
      </div>
      {children}
    </div>
  );
};

export default LinkLayout;
