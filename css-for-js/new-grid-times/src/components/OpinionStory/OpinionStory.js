import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt='' src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  container-type: inline-size;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: var(--color-gray-900);

  @container (min-width: 500px) {
    background-color: orange;
  }

  @media ${QUERIES.tabletOnly} {
    display: block;
  }
`;

const Avatar = styled.img`
  order: 1;
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;

  @media ${QUERIES.tabletOnly} {
    order: 0;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
