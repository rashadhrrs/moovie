import styled from 'styled-components';

export const StyledSearchBar = styled.div`

`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 25px;
  background: #353535;
  margin: 0 auto;
  position: relative;
  color: #fff;
  padding: 5px;
  top: 15px;
  border-radius: 5px;


  .movie {
    position: absolute;
    left: 10px;
    top: 10pxpx;
    color: #fff;
    z-index: 1000;
  }
  .search{
    position: absolute;
    right: 10px;
    top: 10px;
    color: #fff;
    z-index: 1000;
  }

  input {
    font-family: 'Abel', sans-serif;
    font-size: 20px;
    position: absolute;
    left: 0px;
    top: 1px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 20px;
    color: #fff;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
