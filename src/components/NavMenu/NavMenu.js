import React from 'react';
import {Link} from 'react-router-dom';
import './NavMenu.css';

export default function NavMenu(props) {
  const { pages, clickClose } = props;
  function renderLinks() {
    return (
      <ul className='NavMenu--ul'>
        {pages.map((page, i) => (
          <li  key={i}><Link className={(page !== 'Hire Us') ? '' : 'NavMenu--cta'} onClick={clickClose} to={(page !== 'Hire Us') ? page.toLowerCase().split(' ').join('-') : 'contact'}>{page}</Link></li>
        ))}
      </ul>
    )
  }
  return (
    <section className='NavMenu'>
      {renderLinks()}
    </section>
  )
}
