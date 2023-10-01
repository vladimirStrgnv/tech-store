import { Link } from 'react-router-dom';
import './index.css';


const Logo  = () => {
    return (
      <Link to="/">
        <div className="logo">NPS</div>
      </Link>
    );
  }
  
  export default Logo;