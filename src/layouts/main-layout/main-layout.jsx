import React from 'react'

// assets
import BoostrapLogo from '../../assets/images/bootstrap-logo.svg'


// WrapperComponent

function MainLayout({ children }) {
  console.log("MainLayout")
  const access_token = window.sessionStorage.getItem('access_token');

  if(!access_token) {
    return (
      <>please sign in</>
    )
  }

  return (
    <>
      <header>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={BoostrapLogo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
              Bootstrap
            </a>
          </div>
        </nav>
      </header>

      <main>
        {children}
      </main>
    </>
  )
}

export default MainLayout