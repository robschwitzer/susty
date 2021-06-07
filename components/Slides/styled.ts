import styled from  "styled-components";

export const BulletPointWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > span {
    margin-right: 20px;
    font-size: 36px;
  }
`;