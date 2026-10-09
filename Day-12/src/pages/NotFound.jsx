import React from "react";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>

        <div className="notfound-divider"></div>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <a href="/" className="notfound-button">
          <span className="home-icon">⌂</span>
          Back to Home
        </a>

        <div className="notfound-footer">Error Code: 404 | Page Not Found</div>
      </div>

      <div className="notfound-decoration decoration-one"></div>
      <div className="notfound-decoration decoration-two"></div>
      <div className="notfound-decoration decoration-three"></div>
    </div>
  );
};

export default NotFound;
