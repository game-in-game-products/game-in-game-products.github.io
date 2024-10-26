"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputNumberButtons from '../../components/input-number/input-number';
import { useState } from 'react';
import CopyLinkComponent from '../../components/copy-link-component/copy-link-component';

const ACTIONS = { MAFIA_UPDATE: 1, CITIZENS_UPDATE: 2, NEXT_ACTION: 3, GROUP_NAME: 4 }
const PAGE_STATES={REGISTRATION:1, SHARE_LINK:2}

const NewGame = () => {
    const [gameInfo, setGameInfo] = useState({
        mafiaNumber: 3,
        citizenNumber: 6,
        groupName: '',
        state: PAGE_STATES.REGISTRATION

    })

    const handler = (type, value) => {
        switch (type) {
            case ACTIONS.GROUP_NAME:
                setGameInfo({ ...gameInfo, groupName: value })
                break;
            case ACTIONS.MAFIA_UPDATE:
                setGameInfo({ ...gameInfo, mafiaNumber: value })
                break;
            case ACTIONS.CITIZENS_UPDATE:
                setGameInfo({ ...gameInfo, citizenNumber: value })
                break;
            case ACTIONS.NEXT_ACTION:
                alert(JSON.stringify(gameInfo))
                setGameInfo({ ...gameInfo, state: PAGE_STATES.SHARE_LINK })
                break;
            default:
                break;
        }
    }
    
    const getNewGameForm = () => {
        return (
            <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Group Name</Form.Label>
                    <Form.Control type="text" placeholder="name of the group" onChange={e => handler(ACTIONS.GROUP_NAME, e.target.value)} />
                </Form.Group>

                <InputNumberButtons label="Mafia numbers: " defaulValue={3} handler={(value) => handler(ACTIONS.MAFIA_UPDATE, value)} />
                <InputNumberButtons label="Citizen numbers: " defaulValue={6} handler={(value) => handler(ACTIONS.CITIZENS_UPDATE, value)} />

                <b>Roles:</b>
                <ul style={{ color: "darkblue" }}>
                    <li> Doktor</li>
                    <li> God Father</li>
                    <li> Police</li>
                </ul>

                <Button variant="primary" onClick={() => handler(ACTIONS.NEXT_ACTION)}>Next</Button>{' '}
            </>
        )
    }

    const getShareGameLinkForm = ()=>{
        return (
            <CopyLinkComponent link="https://omidmohebbi.nl"></CopyLinkComponent>
        )
    }

    const body = ()=>{
        switch (gameInfo.state) {
            case PAGE_STATES.REGISTRATION:                
                return(getNewGameForm());  
            case PAGE_STATES.SHARE_LINK:
                return(getShareGameLinkForm())      
            default:
                break;
        }
    }
    return (
        <div className="d-flex flex-column p-2 w-100 ">
            {body()}

        </div>
    )
}

export default NewGame;