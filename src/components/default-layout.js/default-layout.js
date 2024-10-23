



const DefaultLayout = ({ children }) => {
    return (
        <div className="App">
            <div className="background-image"></div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;