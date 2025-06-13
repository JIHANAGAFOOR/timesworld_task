import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { countryActions } from "../store/slice/country";
import type { RootState } from "../store";

function NavbarItem() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state: RootState) => state.country.filter);

  const onFilterHandler = (filter: string) => {
    dispatch(countryActions.filterCountrySelected(filter));
  };

  const linkStyle = (filter: string) => ({
    borderBottom: activeFilter === filter ? "2px solid black" : "none",
    fontWeight: activeFilter === filter ? "bold" : "normal",
  });

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand>Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              onClick={() => onFilterHandler("All")}
              style={linkStyle("All")}
            >
              All
            </Nav.Link>
            <Nav.Link
              onClick={() => onFilterHandler("Asia")}
              style={linkStyle("Asia")}
            >
              Asia
            </Nav.Link>
            <Nav.Link
              onClick={() => onFilterHandler("Europe")}
              style={linkStyle("Europe")}
            >
              Europe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarItem;
