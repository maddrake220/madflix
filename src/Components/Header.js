import React from "react";
import { Link, withRouter } from 'react-router-dom';
/* Link from react-router-dom : 해당 page가 내 application에 
있으면 browser방식으로 가지 않고 javascript방식으로 동작한다 */
import styled from 'styled-components';

/* styled-components: Css의 Local화 가능
styled-components highlighting on VSCode: 
extension=> vscode-styled-components*/
const Header = styled.header`
    color: white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height: 50px;
    display:flex;
    align-items: center;
    padding: 0px 10px;
    background-color:rgba(20,20,20,1);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  `

const List = styled.ul`
    display:flex;
    &:hover{
        backgroud-color:blue;
    }`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom:5px solid 
    ${props => (props.current ? "#3498db" : "transparent")};
    transition:border-bottom .5s ease-in-out;
  `;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
export default withRouter(({ location: { pathname }}) =>(
<Header>
    <List>
        <Item current={pathname === "/"}>
            <SLink to="/">영화</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
            <SLink to="/tv">TV시리즈</SLink>
        </Item>
        <Item current={pathname === "/search"}>
            <SLink to="/search">검색</SLink>
        </Item>
    </List>
</Header>))
/* withRouter : 다른 컴포넌트를 감싸는 컴포넌트, props사용 가능*/
// export default withRouter(Header) 와 같은 의미