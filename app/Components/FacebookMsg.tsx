"use client"
import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <FacebookProvider appId="3547894002094789" chatSupport>
          <CustomChat pageId="228060463722282" minimized={true}/>
        </FacebookProvider>    
      );
};

export default FacebookMsg;