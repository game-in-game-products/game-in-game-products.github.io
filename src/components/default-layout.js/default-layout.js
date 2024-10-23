import backgroundImage from '../../assets/images/mafia.jpg'; 

const bodyStyle = {
    backgroundImage: `url(${backgroundImage})`,  // Using the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

const DefaultLayout = ({ children }) => {
    return (
        <div className="App" style={bodyStyle}>            
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;