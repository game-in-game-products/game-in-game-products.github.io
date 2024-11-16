"use client"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputNumberButtons from '../../components/input-number/input-number';
import { useState } from 'react';
import CopyLinkComponent from '../../components/copy-link-component/copy-link-component';
import Game from '@/model/Game';
import { createGameApi } from '@/api/base-api';
import { stat } from 'fs';

const ACTIONS = { MAFIA_UPDATE: 1, CITIZENS_UPDATE: 2, NEXT_ACTION: 3, GROUP_NAME: 4 }


const NewGame = () => {
    const [gameInfo, setGameInfo] = useState<Game>({
        groupName: ' your group name',
        mafiaCount: 3,
        citizenCount: 6,
        members: [],
        state: 'REGISTRATION'
    });

    const handler = (type: number, value: string | undefined) => {
        switch (type) {
            case ACTIONS.GROUP_NAME:
                setGameInfo({ ...gameInfo, groupName: value ?? '' })
                break;
            case ACTIONS.MAFIA_UPDATE:
                setGameInfo({ ...gameInfo, mafiaCount: Number(value) })
                break;
            case ACTIONS.CITIZENS_UPDATE:
                setGameInfo({ ...gameInfo, citizenCount: Number(value) })
                break;
            case ACTIONS.NEXT_ACTION:
                createGameApi(gameInfo, (newGame) => setGameInfo({ ...newGame, state: "SHARE_LINK" }))
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

                <InputNumberButtons label="Mafia numbers: " defaulValue={3} handler={(value: any) => handler(ACTIONS.MAFIA_UPDATE, value)} />
                <InputNumberButtons label="Citizen numbers: " defaulValue={6} handler={(value: any) => handler(ACTIONS.CITIZENS_UPDATE, value)} />

                <b>Roles:</b>
                <ul className="w-auto text-left " style={{ color: "darkblue" }}>
                    <li className='p-1 m-1 bg-white' style={{
                        backgroundColor: "rgb(229 229 229) !important"
                    }}> Doktor</li>
                    <li className='p-1 m-1 bg-white'
                        style={{
                            backgroundColor: "rgb(229 229 229) !important"
                        }}> God Father</li>
                    <li className='p-1 m-1 bg-white'
                        style={{
                            backgroundColor: "rgb(229 229 229) !important"
                        }}> Police</li>
                </ul>

                <Button variant="primary" className="w-100" onClick={() => handler(ACTIONS.NEXT_ACTION, undefined)}>Next</Button>{' '}
            </>
        )
    }

    const getShareGameLinkForm = () => {
        return (
            <CopyLinkComponent link={"/" + gameInfo.token}></CopyLinkComponent>
        )
    }

    const body = () => {
        switch (gameInfo.state) {
            case "REGISTRATION":
                return (getNewGameForm());
            case "SHARE_LINK":
                return (getShareGameLinkForm())
            default:
                break;
        }
    }
    return (
        <div className="d-flex m-auto flex-column justify-content-center align-items-center p-2 w-sm-100 w-lg-50 h-sm-100 h-md-100 text-white">
            <div className='p-4 ' style={{
                border: "2px solid gray"
            }}>
                {body()}
            </div>

        </div>
    )
}

export default NewGame;


