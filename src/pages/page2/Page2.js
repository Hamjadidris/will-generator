
import About from '../../Components/Form/About';
import Legal from '../../Components/Form/Legal';
import Assets from '../../Components/Form/Assets';
import Download from '../../Components/Form/Download';
import { Link } from 'react-router-dom';

// import { Routes, Route, Link } from 'react-router-dom';

function Page2() {
  return (
    <div className="Pages">
      <About />
      <Legal />
      <Assets />
      <Download />
      <Link to="/will">
          <button>Next Page</button>
       </Link>
    </div>
  );
}

export default Page2;
