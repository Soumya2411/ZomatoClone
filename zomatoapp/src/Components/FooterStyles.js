import styled from 'styled-components';

export const Box = styled.div`
    background-color: #000;
    padding: 2rem 0 0 0;
    position: absolute;
    bottom: 0;
    width: 100%;

    @media screen and (max-width: 768px) {
        padding: 1rem 0 0 0;
    }
`;

export const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    
    
`;  

export const Column=styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`;

export const Row=styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
    grid-gap: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const FooterLink=styled.a`
    color: black;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }
`;

export const Heading=styled.p`
    font-size: 18px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;
