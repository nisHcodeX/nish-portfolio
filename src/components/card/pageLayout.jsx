export const PageLayout = ({ bgColor = 'bg-white', borderRadius = 'rounded-lg', title = 'title', children }) => {
  return (
    <div className={`${bgColor} ${borderRadius} font-raleway w-[100%] h-[100%] py-8 px-12`}>
    <div className="w-full flex flex-row items-center gap-8">
        <div className="font-poppins text-[40px] uppercase">{title}</div>
        <div className="bg-gradient-to-r from-gradient-1 to-gradient-2 w-[250px] h-[2px]"></div>
    </div>
      {children}
    </div>
  );
};
