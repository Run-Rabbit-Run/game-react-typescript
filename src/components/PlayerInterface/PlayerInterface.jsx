import React from 'react';

import './PlayerInterface.scss';

const PlayerInterface = () => {
    return (
        <div className="player-interface">
            <ul className="player-interface__stats-list">
                <li className="player-interface__stats-item">
          Здоровье: <span className="player-interface__stats-value">100</span>
                </li>
                <li className="player-interface__stats-item">
          Магическая сила: <span className="player-interface__stats-value">100</span>
                </li>
                <li className="player-interface__stats-item">
          Броня: <span className="player-interface__stats-value">5</span>
                </li>
            </ul>

            <div className="attack-skills">
                <div className="attack-skills__icons-list">
                    <div className="attack-skills__icons-item">skill</div>
                </div>

                <div className="attack-skills__descriptions">
                    <div className="attack-skills__icons-item">description</div>
                </div>
            </div>
            <div className="special-attack-skills"></div>

            <div className="passive-skill-hero"></div>
        </div>
    );
};

export default PlayerInterface;
