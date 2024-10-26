import Button from 'react-bootstrap/Button';


const Home = () => {
    return (<div>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100" >
            <div className="text-center w-75">
                <div className=' h-100 w-100'>
                   
                </div>
                <div className='h-100 ' >
                    <a href="/join-game"><Button className='m-2  bg-dark' style={{ width: "250px" }}> Join with URL</Button></a>
                    <a href="/new-game "><Button className='m-2 ' style={{ width: "250px" }} > Create a new game </Button></a>
                </div>
            </div>
        </div>

        {/* <div className="container vh-100 w-100 ">
            <div className=' row h-100 align-items-center'>
                <div className='col-9 h-100 '>
                    <img src={MAFIA_LOGO} className='w-100'></img>
                </div>

                <div className=' col-3  text-center h-100 '>
                    <Link to="/join-game"><Button className='mt-auto  bg-dark' style={{ width: "250px" }}> Join with URL</Button></Link>
                    <Link to="/new-game "><Button className='m-b-auto ' style={{ width: "250px" }} > Create a new game </Button></Link>
                </div>
            </div>
        </div> */}
    </div>)
}

export default Home;