import UpperMenu from "@/components/UpperMenu";

const LinkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UpperMenu />
      <div className="mt-28">{children}</div>
    </div>
  );
};

export default LinkLayout;
