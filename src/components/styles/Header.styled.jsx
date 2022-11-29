import styled from 'styled-components';

const StyledHeader = styled.header` 
  background-color: ${({ theme }) => theme.colors.header}; 
  padding: 4rem 0;
`;//!component ismi StyledHeader dır.  
  //!styled.header ise header etiketidir daha sonra bunu kullanmak için header.jsx de çağırıp kullanılcak yerde tag gibi kullanıyoruz
export const Logo = styled.img`
  width: 300px;
  padding: 2rem 0;
  @media (max-width: ${({theme}) => theme.responsive})  {
    text-align: center;
  }
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({theme}) => theme.responsive})  {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width  : 350px;
  @media (max-width: ${({theme})=> theme.responsive}) {
    flex-direction: column;
  }
`;

export default StyledHeader;