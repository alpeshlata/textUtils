import React from 'react'
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
export default function Navabaar(props) {
  return (
  <nav className={`navbar navbar-expand-lg  ${props.mode==='ligth'?'bg-body-tertiary':props.mode} navbar-${props.mode} bg-${props.mode}`}> 
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

      {/* <label for="exampleColorInput" class="form-label">Color picker</label>
      <input type="color" class="form-control form-control-color piker" id="exampleColorInput" value="#563d7c" title="Choose your color"></input> */}

      <div className={`form-check form-switch text-${props.mode==='ligth'?'black':'white'}`}>

          <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navabaar.propTypes={
  title:PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
Navabaar.defaultProp={
  title:"Set Title",
  about:"set about"
}