import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between">
        <Link to="#" className="navbar-brand">
          The Joel Hilton Movie Collection
        </Link>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/" active>
              Home
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/Podcasts">
              Podcasts
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/Movies">
              Movie Collection
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}
