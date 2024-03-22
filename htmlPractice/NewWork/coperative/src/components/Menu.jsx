import React from "react";
import Content from "./Content";

function Menu() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-5'>
            <div className='container-fluid bg-warning border-end border-2 rounded min-vh-100 border-success'>
              <div className='sidebar'>
                <span className='brand-name fw-bold shadow fs-4'>
                  Jummy's Collection
                </span>
              </div>
              <hr className='text-dark' />
              <div className='list-group list-group-flush'>
                <a
                  href='#Dashboard'
                  className='list-group-item bg-warning py-1'
                >
                  <span className='fs-6'>Dashboard</span>
                </a>
                <a href='#Home' className='list-group-item bg-warning py-1'>
                  <span className='fs-6'>Home</span>
                </a>
                <a href='#Product' className='list-group-item bg-warning py-1'>
                  <span className='fs-6'>Products</span>
                </a>
              </div>
              <hr className='text-dark' />
            </div>
            <div className='col-6'>
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
