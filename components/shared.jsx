import { css } from "goober";

export const Layout = ({ children }) => (
  <section className={style}>
    <div>{children}</div>
    <hr />
    <a href="/foo">foo</a> |
    <a href="/bar">bar</a> |
    <a href="/baz">baz</a> |
    <a href="/qux">qux</a> |
    <a href="/quux">quux</a>
  </section>
);

const style = css`
  background-color: gold;
`;
