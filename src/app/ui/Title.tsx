import React from "react";

// 各項目のタイトルのUI
const Title = ({ en, ja }: any) => {
  return (
    <div className="mb-4 md:mb-8">
      <h2 className={`text-3xl md:text-6xl text-title text-center`}>{en}</h2>
      <p className={`text-white text-lg md:text-2xl text-center`}>{ja}</p>
    </div>
  );
};

export default Title;
