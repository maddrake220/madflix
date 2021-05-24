import { createGlobalStyle} from "styled-components"
import reset from "styled-reset";
const globalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Nanum Gothic';
        font-style: normal;
        font-weight: 700;
        font-size:12px;
        background-color:rgba(0, 0, 0, 1);
        color:white;
        padding-top:50px;
    }
    `;
export default globalStyles;