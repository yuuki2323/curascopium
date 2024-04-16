import React from 'react';
import CustomSection from '../ui/CustomSection';

const History = () => {
  return (
    <CustomSection
      id='history'
      body={<HistoryBody />}
    />
  );
};

const HistoryBody = () => {
  return (
    <p className='mx-auto text-white text-sm md:text-xl py-4 md:py-8'>
      2022年、米国カリフォリニア大学バークレー校にて宇宙物理学専攻、障がい者学副専攻の田中優作により学生団体が創設される。
      <br />
      <br />
      2023年、チームメンバーをカリフォリニア大学バークレー校、マサチューセッツ工科大学、東京大学、筑波大学より募集。
      <br />
      <br />
      現在はアメリカ、日本、ヨーロッパから学年、専攻、国籍を跨いだチーム構成で活動中。
    </p>
  );
};

export default History;
