import React from 'react';
import styled from 'styled-components/macro';

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper key={story.id}>
              <SecondaryStory {...story} />
            </SecondaryStoryWrapper>
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStoryWrapper key={story.id}>
              <OpinionStory {...story} />
            </OpinionStoryWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  row-gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    margin-right: 16px;
    padding-right: 16px;
    border-right: solid 1px var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-right: 16px;
    padding-right: 16px;
    border-right: solid 1px var(--color-gray-300);
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -0.65rem;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    padding-top: 16px;
    border-top: solid 1px var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryStoryList = styled(StoryList)``;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: unset;
    gap: 32px;
  }
`;

const StoryWrapper = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: solid 1px var(--color-gray-300);

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }
`;

const SecondaryStoryWrapper = styled(StoryWrapper)``;

const OpinionStoryWrapper = styled(StoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;
    border: 0;
  }
`;

export default MainStoryGrid;
