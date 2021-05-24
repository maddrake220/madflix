import React from "react";
import { Link, withRouter } from 'react-router-dom';
/* Link from react-router-dom : 해당 page가 내 application에 
있으면 browser방식으로 가지 않고 javascript방식으로 동작한다 */
import styled from 'styled-components';
import { home3 } from "react-icons-kit/icomoon/home3";
import { search } from "react-icons-kit/icomoon/search";
import { withBaseIcon } from 'react-icons-kit'


const IconContainer =  
    withBaseIcon({ size: 27,
         style: {color: 'White'}})

/* styled-components: Css의 Local화 가능
styled-components highlighting on VSCode: 
extension=> vscode-styled-components*/
const Header = styled.header`
    
    color: white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height: 60px;
    align-items: center;
    padding: 0px 10px;
    background-color:rgba(0,0,0,1);
    z-index: 10;
    box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.8);
    opacity:0.7;
  `

const RightMenu = styled.div` 
    padding-right: 25px;
    float: right;
    display: flex;
    font-size: 20px;
`;
const List = styled.ul`
    float: left;
    display:flex;
    
`;

const Item = styled.li`
    width: 90px;
    height: 60px;
    text-align: center;
    border-bottom:5px solid 
    ${props => (props.current ? "RED" : "transparent")};
    transition:border-bottom .5s ease-in-out;
    
  `;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    &:hover{
        opacity: 0.9;
    }
  `;
export default withRouter(({ location: { pathname }}) =>(
<Header>
    <List>
        <Item current={pathname === "/"}>
            <SLink to="/"><IconContainer icon={home3}/></SLink>
        </Item>
        <Item current={pathname === "/movie"}>
            <SLink to="/movie">영화</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
            <SLink to="/tv">TV시리즈</SLink>
        </Item>
    </List>
    <RightMenu> 
        <SLink to="/search"><IconContainer icon={search}/></SLink> 
    </RightMenu>
</Header>))
/* withRouter : 다른 컴포넌트를 감싸는 컴포넌트, props사용 가능*/
// export default withRouter(Header) 와 같은 의미