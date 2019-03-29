/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = ({
  added, label, removed, disabled,
}) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button
      className={classes.Less}
      onClick={removed}
      disabled={disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={added}>More</button>
  </div>
);

export default buildControl;
