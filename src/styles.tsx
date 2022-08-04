import styled from "styled-components";

export const Logo = styled.img`
    width: 100px;
    margin: 20px 0;
`;

export const Nav = styled.nav`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
`;

export const Search = styled.div`
    width: 297px;
    height: 55px;
    background: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    padding: 15px;
    font-family: 'Mulish';
    font-weight: 400;
    font-size: 14px;
    color: #333333;
    text-align: center;
    p{ width: 100%;}
    div{
        border-right: #F2F2F2 1px solid;
        border-left: #F2F2F2 1px solid;
        margin: 10px;
        padding: 10px;
    }
`

export const Header = styled.header`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 50px 0px 0;
    width: 85%; 
    margin: 0 auto;
    align-items: center;
    color: #4F4F4F; 
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: #333333; 
`

export const CardContainer = styled.div`
    margin: 32px 16px;
    flex: 1;
    min-width: 350px;
    max-width: 400px;
    max-height: 300px;
    
    @media(min-width: 1106px){
        max-width: 400px;
    }
`;

export const ImageContainer = styled.div`
    height: 80%;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 24px;
    }
`;

export const ImageCard = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 24px;
    height: 80%;
`;


export const CardText = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #4F4F4F;
    font-size: 12px;
    line-height: 17px;

    span{
        font-weight: 700;
        font-size: 10px;
        text-transform: uppercase;
        border: 1px solid #4F4F4F;
        border-radius: 12px;
        padding: 3px 6px;
    }

    .type{
        font-weight: 500;
        font-size: 12px;
        color: #828282;
        padding: 6px;
        flex-grow: 1;
    }

    .title{
        font-weight: 600;
        font-size: 14px;
        color: #333333;
        line-height: 20px;
        padding: 6px;
        width: 100%;
    }
`;

export const Section = styled.section`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`


export const Input = styled.input`
        outline: none;
        padding: 5px;
        border: 0;
        width: 100%;

    &::placeholder {
  color: #BDBDBD;
}
`

// export const Select = styled('select')`
// width: 30%;
//   height: 55px;
//   background: white;
//   border-radius: 16px;
//   color: gray;
//   padding-left: 5px;
//   font-size: 14px;
//   border: none;
//   margin-left: 10px;
//   outline: none;
//   box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
//   &:focus{
//     border: 1px solid black;
//   }
//   flex-grow: 1;
// `