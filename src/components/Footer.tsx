
import React from 'react';

const Footer: React.FC = () => {
  const date = new Date();
  const currentYear = date.getFullYear()
    return (
        <footer>
            <p>&copy; {currentYear} My Todo App</p>
        </footer>
    );
};

export default Footer;
