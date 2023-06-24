// export default function Header({ title }) {
//   return <h1 className="title">{title}</h1>
// }
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ textAlign: 'center' }}>
      {/* <div>
        <img src="/path/to/logo.png" alt="Logo" />
      </div> */}
            <div className="header-links">

      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
          <li style={{ marginRight: '10px' }}>
            <Link href="#section1">
              <a>Section 1</a>
            </Link>
          </li>
          <li style={{ marginRight: '10px' }}>
            <Link href="#section2">
              <a>Section 2</a>
            </Link>
          </li>
          <li>
            <Link href="#section3">
              <a>Section 3</a>
            </Link>
          </li>
        </ul>
      </nav></div>
    </header>
  );
};

export default Header;
