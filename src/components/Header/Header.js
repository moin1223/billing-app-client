import React from 'react';

const Header = () => {
    return (
      <div className="bg">
        <div className="container">
             <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
        
        <p className="navbar-brand"><b>Billing App</b></p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="animation navbar-nav ms-auto">
    
            <p className="navbar-brand"><b>Paid total:</b></p>
            </div>
          </div>
        </div>
      </nav>

        </div>
        </div>
       
    );
};

export default Header;