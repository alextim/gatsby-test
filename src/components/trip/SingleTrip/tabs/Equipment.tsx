import React from 'react';
import styled from '@emotion/styled';

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
      {note && <div dangerouslySetInnerHTML={{ __html: note }} />}
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
          <GearTypeHeading>{e.node.name}</GearTypeHeading>
          <Items type={e.node.key} edges={a1} />
        </div>
      ))}
    </div>
  );
};

const GearTypeHeading = styled.h3`
  display: block;
  margin: 0;
  line-height: 30px;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  border-bottom: 1px dotted #dce7eb;
`;

const GearItemsWrap = styled.ul`
  list-style-position: outside;
  margin: 0 0 0 0.75rem;
  padding: 0;
`;
const GearItem = styled.li`
  position: relative;
  margin: 0 0 0.25rem;
  padding: 0.125rem 0 0.25rem;
`;

const StyledCheckbox = styled.input`
  position: absolute;
  cursor: pointer;
  margin-left: 200px; /* я добавил,а надо просто сдвинуть влево */
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;

  &:checked ~ {
    p {
      display: none;
      margin-top: 0;
      max-height: 0;
      opacity: 0;
      transform: translate(0, 50%);
    }
    i {
      &:before {
        margin-top: 8px;
        height: 8px;
        transform: translate(2px, 0) rotate(45deg);
      }
      &:after {
        margin-top: 8px;
        height: 8px;
        transform: translate(-2px, 0) rotate(-45deg);
      }
    }
  }
`;
const StyledI = styled.i`
  position: absolute;
  margin-top: 0;
  right: 0;
  transform: translate(-6px, 0);

  :before,
  :after {
    content: '';
    position: absolute;
    background-color: #ff7550;
    width: 3px;
    height: 16px;
    transition: all 0.25s ease-in-out;
  }
  :before {
    transform: translate(0, 0) rotate(45deg);
  }
  :after {
    transform: translate(0, 0) rotate(-45deg);
  }
`;

const Description = styled.p`
  color: rgba(48, 69, 92, 0.8);
  font-size: 14px;
  line-height: 20px;
  position: relative;
  overflow: hidden;
  max-height: 800px;
  opacity: 1;
  transform: translate(0, 0);
  margin-top: 12px;
  z-index: 2;
  transition: all 500ms ease;
`;

type ItemsProps = {
  type: string;
  edges: Array<any>;
};
const Items = ({ type, edges }: ItemsProps) => (
  <GearItemsWrap>
    {edges
      .filter((e) => e.node.type === type)
      .map(({ node }, i) => (
        <GearItem key={i}>
          {node.description && (
            <>
              <StyledCheckbox type="checkbox" defaultChecked={true} />
              <StyledI />
            </>
          )}
          {node.url ? <a href={node.url}>{node.name}</a> : node.name}
          {node.description && <Description>{node.description}</Description>}
        </GearItem>
      ))}
  </GearItemsWrap>
);

export default Equipment;
