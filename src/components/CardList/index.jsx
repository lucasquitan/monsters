import React from 'react';

import { Card } from '../Card';

import './styles.css';

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((item) => (
        <Card key={item.id} monster={item} />
      ))}
    </div>
  );
};
