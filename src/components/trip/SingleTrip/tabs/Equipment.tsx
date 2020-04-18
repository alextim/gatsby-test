import React from 'react';

import { IEquipment } from '../../../../types/trip-types';

interface IEquipmentProps {
  equipment: IEquipment;
}

const Equipment: React.FC<IEquipmentProps> = ({ equipment }) => {
  const { list, note } = equipment;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: note }} />
    </>
  );
};

export default Equipment;
