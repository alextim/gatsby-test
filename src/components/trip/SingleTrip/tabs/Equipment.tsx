import React from 'react';

import { IEquipment, IGearItem } from '../../trip';
import useTaxonomy from '../../../../helpers/hooks/useTaxonomy';
import useGear from '../../../../helpers/hooks/useGear';
import { buildTaxonomyLookup, sanitizeKeys } from '../../../../helpers/taxonomy-helpers';

type Props = {
  equipment: IEquipment;
};

const Equipment = ({ equipment }: Props) => {
  const { gear, note } = equipment;
  return (
    <>
      {gear && <GearList gear={gear} />}
      <div dangerouslySetInnerHTML={{ __html: note }} />
    </>
  );
};

type GearListProps = {
  gear: Array<string>;
};
const GearList = ({ gear }: GearListProps) => {
  const taxEdges = useTaxonomy();
  const taxonomies = buildTaxonomyLookup(taxEdges);
  const sanitized = sanitizeKeys(taxonomies['gear-usage'], gear);
  if (!sanitized || sanitized.length === 0) {
    return null;
  }
  const edges = useGear();
  const a1 = edges.filter(({ node }: any) =>
    node.usage.some((usage: string) => sanitized.some((item) => item === usage)),
  );
  const headings = taxEdges.filter(
    (e: any) => e.node.fields.taxonomy === 'gear-type' && a1.some(({ node }: any) => node.type === e.node.key),
  );

  return (
    <div>
      {headings.map((e: any, i: number) => (
        <div key={i}>
          <div>A:{e.node.name}</div>
          <Items type={e.node.key} edges={a1} />
        </div>
      ))}
    </div>
  );
};

type ItemsProps = {
  type: string;
  edges: Array<any>;
};
const Items = ({ type, edges }: ItemsProps) => (
  <div>
    {edges
      .filter((e) => e.node.type === type)
      .map((e, i) => (
        <div key={i}>{(e.node as IGearItem).name}</div>
      ))}
  </div>
);

export default Equipment;
