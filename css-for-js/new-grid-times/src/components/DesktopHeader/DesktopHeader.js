import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const DesktopHeader = () => {
  return (
    <Wrapper>
      <header>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <Logo />
          <SubscribeWrapper>
            <Button>Subscribe</Button>
            <SubscribeLink href='#'>Already a subscriber?</SubscribeLink>
          </SubscribeWrapper>
        </Row>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  margin-block: 16px 72px;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: start;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  padding-block: 8px;

  svg {
    display: block;
  }
`;

const SubscribeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: end;
  gap: 8px;
  margin-top: 24px;
`;

const SubscribeLink = styled.a`
  color: var(--color-gray-900);
  font-size: 0.875rem;
  font-style: italic;
  text-decoration: underline;
`;

export default DesktopHeader;
