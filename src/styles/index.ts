import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    border: 0px;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  :focus,
  :active {
    outline: none;
  }
  a:focus,
  a:active {
    outline: none;
  }

  html,
  body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
  
  body {
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  }
  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul li {
    list-style: none;
  }
  img {
    vertical-align: top;

    display: block;
    max-width: 100%;
    height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  .ant-picker-panel-layout {
    @media screen and (max-width: 423px) {
      width: 90vw;
      overflow: auto;
    }
  }
  .ant-select-item-option-content {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #000000;
  }
  :where(.css-dev-only-do-not-override-j0nf2s).ant-picker-dropdown .ant-picker-header-view button:hover {
      color: #10b369;
    }
  .ant-picker-now-btn:hover {
    color: #10b369;
  }
  :where(.css-dev-only-do-not-override-j0nf2s).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner, :where(.css-dev-only-do-not-override-j0nf2s).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner, :where(.css-dev-only-do-not-override-j0nf2s).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner{
    background-color: #10b369;
  }
  :where(.css-dev-only-do-not-override-j0nf2s).ant-btn-primary:not(:disabled):hover {
    background-color: #10b369;
  }
  :where(.css-dev-only-do-not-override-j0nf2s).ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
    border-color:red;
  }
`;
