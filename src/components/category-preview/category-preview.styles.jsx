import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link';

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
`

export const TitleLink = styled(HashLink)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
` 
  