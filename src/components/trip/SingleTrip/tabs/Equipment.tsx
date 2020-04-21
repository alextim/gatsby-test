import React from 'react';

import { IEquipment } from '../../trip';

type Props = {
  equipment: IEquipment;
};

const Equipment = ({ equipment }: Props) => {
  const {
    // list,
    note,
  } = equipment;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: note }} />
    </>
  );
};

export default Equipment;
