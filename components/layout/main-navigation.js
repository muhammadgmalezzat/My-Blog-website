import Link from 'next/link';
import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <a href="/"><Logo /></a> 
      
      <nav>
        <ul>
          <li>
            <Link href="/posts" legacyBehavior={true} >Posts</Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior={true}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
