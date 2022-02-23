/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { Text } from 'react'

import spongebobSad from 'images/spongebob-sad.jpg'

export default function NotFound() {
  return (
    <div className="container" style={{
        backgroundColor: '#05284e',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      <img src={spongebobSad} alt="Not Found" />
      <br />
      <div style={{ color: 'white', fontFamily: 'tahoma' }}>
        Oops! Not Found!
      </div>
    </div>
  );
}
