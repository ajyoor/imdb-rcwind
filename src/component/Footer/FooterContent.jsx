import React from "react";

const FooterContent = () => {
  return (
    <footer className="footer footer-center p-4 text-base-content">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ajyoor{" "}
        </p>
      </aside>
    </footer>
  );
};

export default FooterContent;
