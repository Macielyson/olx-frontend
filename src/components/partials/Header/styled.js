import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #fff;
    height: 60px;
    border-bottom: 1px solid #ccc;

.container {
    max-width: 1000px;
    margin: auto;
    display: flex;
}

a {
    text-decoration: none;
}

.logo {
    flex: 1; 
    display: flex;
    align-items: center;
    height: 60px;

    .logo-1,
    .logo-2,
    .logo-3 {
        font-size: 27px;
        font-weight: bold;
    }

    .logo-1 {color: #ff0000}
    .logo-2 {color: #00ff00}
    .logo-3 {color: #00f}
}

nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul, li {
        margin: 0px;
        padding: 0px;
        list-style: none;
    }

    ul {
        display: flex;
        align-items: center;
        height: 40px;
    }

    li {
        margin-left: 20px;
        margin-right: 20px;

        a {
            color:#000;
            font-size: 14px;
            text-decoration: none;

            &:hover {
                color: #999;
            }

            &.button {
                background-color: #FF8100;
                border-radius: 4px;
                color: #fff;
                padding: 5px 10px;

            }
            &.button:hover {
                background-color: #e57706;
            }
        }
    }
}
`;