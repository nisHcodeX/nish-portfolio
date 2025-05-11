export const DetailCard = ({ bgColor = 'bg-white', borderRadius = 'rounded-lg', icon = "", title = 'title', children }) => {
    return (
        <div className={`${bgColor} ${borderRadius} font-raleway w-[100%] h-[100%] p-4`}>
            <div className="w-full flex flex-row items-center gap-4">
                {icon}
                <div className="font-poppins text-[24px] uppercase">{title}</div>
            </div>
            {children}
        </div>
    );
};