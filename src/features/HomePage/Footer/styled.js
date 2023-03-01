import styled from "styled-components";

export const Wrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.darkGray};
    font-weight: 100;
    font-size: 12px;
    padding: 40px 10px 0;
`;

export const FooterContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const Aside = styled.aside`
    max-width: 270px;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(150px, 260px));
`;

export const Item = styled.li`
    height: 35px;
    line-height: 35px;
    margin-bottom: 3px;
`;

export const SocialMediaList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-basis: 10vw;
    justify-content: flex-end;
`;

export const SocialMediaItem = styled.li`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.darkGray};
    margin-left: 16px;
`;

export const SocialMediaLink = styled.a`

`;

export const SubFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const Copyrights = styled.div`
    display: flex;
    align-items: flex-end;
    padding-bottom: 14px;
`;

export const Location = styled.a`
`;

export const Image = styled.div`
`;

export const Place = styled.span`
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
`;

export const CopyText = styled.span`
    margin-left: 16px;
    padding-top: 20px;
`;


export const RegulationsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    
`;

export const RegulationItem = styled.li`
    margin-left: 12px;
`;

export const RegulationLink = styled.a`
    display: inline-block;
    padding: 14px;
`;