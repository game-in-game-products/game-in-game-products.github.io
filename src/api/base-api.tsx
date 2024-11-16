const BASE_URL = "http://localhost:8080/game"
import Game from '@/model/Game';
import axios from 'axios';


const APIs = {
  createGame: { path: `${BASE_URL}`, method: 'POST' },
  getGame: { path: `${BASE_URL}`, method: 'GET' }
}


export const createGameApi = async (gameInfo: Game, responseHandler: (arg0: Game) => void) => {
  try {
    const response = await axios.post(APIs.createGame.path, gameInfo);
    console.log("API response [crete game]: ", response.data)
    const getResponse = await axios.get(APIs.getGame.path + "/" + response.data);
    console.log("API response [get game]: " + getResponse.data)
    responseHandler(getResponse.data)
  } catch (error) {
    console.error('Create game api error:', error);
  }
};