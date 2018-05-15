import React from 'react';
import { string, node } from 'prop-types';

/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Rubik:400,400i,700,700i" rel="stylesheet">
    <style type="text/css">
      * {
        font-family: 'Rubik', sans-serif;
      }

      body {
        padding: 20px;
        background: #fff;
      }

      .center {
        text-align: center;
      }

      .logo {
        width: 200px;
        height: 200px;
        text-align: center;
      }
    </style>
  </head>

  <body>
  </body>
</html>
*/

function ExternalLink(props) {
  return <a {...props} target="_blank" rel="noopener noreferrer">{props.children}</a>;
}

ExternalLink.propTypes = {
  href: string.isRequired,
  children: node.isRequired
};

function Welcome() {
  return (
    <div>
      <p className="center">
        <img className="logo" src="logo.png" alt="nOS" />
      </p>
      <h1 className="center">Welcome to nOS</h1>
      <h2>What is nOS?</h2>
      <p>
        Think of <strong>nOS</strong> as an app store and web browser, a virtual operating system,
        with the ability to access a new, decentralized internet. On this new internet, apps work
        transparently and openly. Your data is safe, and it only goes where you want it to go.
      </p>

      <h2>Getting Started with Developing for nOS</h2>
      <ul>
        <li><ExternalLink href="https://github.com/nos/client">nOS Documentation</ExternalLink></li>
        <li><ExternalLink href="https://github.com/nos/dapp-starter-kit">dApp Starter Kit</ExternalLink></li>
        <li><ExternalLink href="https://github.com/nos/nos-local">nOS Local Blockchain & Smart Contract</ExternalLink></li>
      </ul>

      <h2>Example Code</h2>
      <ul>
        <li><ExternalLink href="https://github.com/nos/client">nOS Client</ExternalLink></li>
        <li><ExternalLink href="https://github.com/nos/dapp-neoblog">neoblog dApp</ExternalLink></li>
      </ul>

      <h2>Registered dApps</h2>
      <ul>
        <li><a href="nos://nos.neo">nOS</a> (the page you&apos;re on)</li>
        <li>More coming soon...</li>
      </ul>
    </div>
  );
}

export default <Welcome />;
