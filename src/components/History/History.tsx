import moment from 'moment';
import React, { useContext } from 'react';
import GameContext from '../../contexts/gameContext';
import SavedGames from '../../types/savedGames';
import './History.scss';

interface Props {
  setHistory(bool: boolean);
}

const History: React.FC<Props> = ({ setHistory }) => {
  const savedGames: SavedGames[] = localStorage.savedGames
    ? JSON.parse(localStorage.savedGames)
    : [];
  const { setWord } = useContext(GameContext);

  return (
    <div className='History'>
      {savedGames.length ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Errors</th>
              <th>Finished</th>
              <th>Restart</th>
            </tr>
          </thead>
          <tbody>
            {savedGames.map((savedGame, index) => (
              <tr key={index}>
                <td>{moment(savedGame.date).format('LLL')}</td>
                <td>{savedGame.errors}</td>
                <td>
                  {savedGame.finished ? (
                    <i className='far fa-check-square' />
                  ) : (
                    <i className='far fa-square' />
                  )}
                </td>
                <td
                  className='restart'
                  onClick={() => {
                    setWord(savedGame.word);
                    setHistory(false);
                  }}>
                  <i className='fas fa-play' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>No games found</h3>
      )}
    </div>
  );
};

export default History;
