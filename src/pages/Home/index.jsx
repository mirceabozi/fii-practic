import styled from "styled-components";
import { Link } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const NavBar = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  height: 80px;
  align-items: center;

  li{
    list-style-type: none;
    margin: 0 5px;
  }
`

function Home() {
  return (
  <Layout>
    <NavBar>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </NavBar>

  </Layout>)
}

export default Home;
