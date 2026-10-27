import { Link } from 'react-router-dom';
import { brand } from '../../config/brand.js';

export default function Brand({ light = false }) {
  return (
    <Link to="/" className={`wordmark ${light ? 'wordmark-light' : ''}`} aria-label={`${brand.name} home`}>
      FORM<span>/</span>SHIFT<sup>®</sup>
    </Link>
  );
}
