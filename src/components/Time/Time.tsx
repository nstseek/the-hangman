import React, { useContext, useEffect, useRef, useState } from 'react';
import GameContext from '../../contexts/gameContext';
import './Time.scss';

/**
 * This component handles the timer in our game
 */
const Time: React.FC = () => {
  const [time, setTime] = useState(100);
  const { word, selectedLetters, setErrors, errors, won } = useContext(
    GameContext
  );
  const setTimeoutRef = useRef(null);

  useEffect(() => {
    if (errors === 6) {
      setTime(0);
    } else {
      setTime(100);
    }
    if (!won) {
      setTimeoutRef.current = setTimeout(updateTime, 1000);
    }
    return () => {
      clearTimeout(setTimeoutRef.current);
    };
  }, [word, selectedLetters]);

  useEffect(() => {
    return () => {
      clearTimeout(setTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      setErrors(6);
    }
  }, [time]);

  const updateTime = () => {
    setTime((time) => {
      if (time > 0) {
        return time - 1;
      } else {
        return time;
      }
    });
    setTimeoutRef.current = setTimeout(updateTime, 1000);
  };

  return (
    <div className='Time'>
      <i className='far fa-clock' />
      {time}
    </div>
  );
};

export default Time;
