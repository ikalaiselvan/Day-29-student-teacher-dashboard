import React from 'react'
import {Link} from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Student/Teacher Dashboard</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <Link to="/">
          <li className="nav-item active">
            <div className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard home</span>
            </div>
          </li>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">ADD to list</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <Link to="/add-student">
          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              &nbsp;&nbsp;
              <span>Add-Student</span>
            </div>
          </li>
        </Link>

        <Link to="/add-teacher">
          <li className="nav-item">
            <div
              className="nav-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              &nbsp;&nbsp;
              <span>Add-Teacher</span>
            </div>
          </li>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
      </ul>
    </>
  );
}

export default Sidebar