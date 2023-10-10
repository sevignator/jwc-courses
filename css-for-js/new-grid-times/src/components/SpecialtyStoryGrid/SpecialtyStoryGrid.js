import React from 'react';
import styled from 'styled-components/macro';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';
import { QUERIES } from '../../constants';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStoryWrapper key={data.id}>
              <MiniStory {...data} />
            </MiniStoryWrapper>
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 100%;
    gap: 64px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr minmax(0, 1fr);
    gap: 0;
  }
`;

const MarketsSection = styled.section`
  @media ${QUERIES.laptopAndUp} {
    margin-right: 16px;
    padding-right: 16px;
    border-right: solid 1px var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 16px;
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    overflow: auto;
  }
`;

const MiniStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    flex: 1;
    min-width: 220px;
  }
`;

export default SpecialtyStoryGrid;
