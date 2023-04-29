import classes from './logo.module.css';
import Image from 'next/image';

function Logo() {
  return (
    <div className={classes.logo}>
    
      <Image
      src='/images/site/logo.png'
      width={160}
      height={130}
    />
    
  </div>);
}

export default Logo;
