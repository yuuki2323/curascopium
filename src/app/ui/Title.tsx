import React from "react";

interface TitleProps {
  title: string;
  subtitle: React.ReactElement;
}

// 各項目のタイトルのUI
const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <div className="mb-4 md:mb-8">
      <h2 className={`text-3xl md:text-6xl text-title text-center`}>{title}</h2>
      <p className={`text-white text-lg md:text-2xl text-center`}>{subtitle}</p>
    </div>
  );
};

export default Title;
