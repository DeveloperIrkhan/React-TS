import React from "react";
type TitleProps = {
  title: string;
};
const Title = ({ title }: TitleProps) => {
  return (
    <p
      className="font-bold text-blue-400 text-2xl my-4 relative 
      after:content-[''] 
      after:absolute 
      after:left-20 
      after:bottom-[50%] 
      after:top-[50%] 
      after:h-[2px] 
      after:w-[10%] 
      after:bg-blue-400 uppercase"
    >
      {title}
    </p>
  );
};

export default Title;
