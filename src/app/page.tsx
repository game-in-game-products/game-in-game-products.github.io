import React from 'react';
import { Button } from 'react-bootstrap'; // Import Button if you haven't done so

const Home: React.FC = () => {
    return (
        <div>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <div className="text-center w-75">
                    <div className='h-100 w-100'>
                        MAFIA
                    </div>
                    <div className='h-100'>
                        <a href="/join-game">
                            <Button className='m-2 bg-dark' style={{ width: "250px" }}>
                                Join with URL
                            </Button>
                        </a>
                        <a href="/new-game">
                            <Button className='m-2' style={{ width: "250px" }}>
                                Create a new game
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;