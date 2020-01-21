import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './assets/menubar.css'

const MenuBarBar = () => {
  return (
    <div className = 'menubar'>
      <Nav activeKey="/home" onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default MenuBarBar;