const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full ">
      <div className="max-w-[1200px] mx-auto  px-6">{children}</div>
    </main>
  );
};

export default MaxWidthWrapper;
