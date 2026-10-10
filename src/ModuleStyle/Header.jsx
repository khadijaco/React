/* Header Styles */
import styles from './style.module.css';
function Header() {
  // const headerStyle = {
  //   backgroundColor: '#b92a2a',
  //   padding: '20px',
  //   textAlign: 'center',
  // };
  return (
    <header>
      {/* <div style={headerStyle}> 
        <h1>My React App</h1>
        <p>Welcome to my app</p>
        <p>This is a simple React app</p>
      </div> */}

<div className={styles.div}>Header Content</div>

    </header>
  );
}

export default Header;