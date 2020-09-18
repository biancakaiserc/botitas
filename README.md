<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://glitch.com/~creditas-bot">
    <img src="https://cdn.glitch.com/project-avatar/a3a8c59a-cef7-45cd-af89-fc5892b6935b.png?1600465354370" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Creditas Bot: Botitas</h3>

  <p align="center">
    The incredible Creditas bot that helps you become part of our culture
    <br />
    <br />
    <a href="https://glitch.com/~creditas-bot">View Demo</a>
    ·
    <a href="https://github.com/biancakaiserc/botitas/issues">Report Bug</a>
    ·
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Maintainers](#maintainers)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

The idea came up with the need to automate communication with the team to warn about the use of @here in the channels, and during Hackaday we had the idea to turn this into a bot for Slack. We hope that this becomes a bigger project and serves to several other ideas that can help to improve the culture of the teams.

### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Nodejs](https://nodejs.org/en/)
* [Slack Bolt API](https://slack.dev/bolt-js/)


<!-- GETTING STARTED -->
## Getting Started

First you need to create a new App on slack workspace.
You can follow this [Tutorial](https://api.slack.com/tutorials/hello-world-bolt) before running the project

### Installation

1. Create an .env file using the .env.example and fill using the Auth keys from your previous created app
2. Install NPM packages
```sh
npm install
```
3. Run the project
```sh
npm start
```

<!-- USAGE EXAMPLES -->
## Usage

After you created the app and filled in the .env with your App's variables, you can use the following shortcuts in Slack

1. @mention: The bot will answer you with a help menu about its current functions
2. @ here: The bot will alert you to the use of the shortcut within the communication channels

_For another uses, please refer to the [Slack Bolt API Documentation](https://slack.dev/bolt-js/concepts#message-listening)_



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/biancakaiserc/botitas/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- MAINTAINERS -->
## Maintainers

* Bianca Kaiser - [@biancakaiserc](https://github.com/biancakaiserc) - bianca.castro@creditas.com
* Gabriela Moraes - [@gabrielaomoraes](https://github.com/gabrielaomoraes) - gabriela.oliveira@creditas.com.br


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Slack API Tutorial with Bolt and Glitch](https://api.slack.com/tutorials/hello-world-bolt)
* [Slack API Webhooks](https://api.slack.com/messaging/webhooks)
* [Bolt API](https://slack.dev/bolt-js/concepts#message-listening)
* [NPM Bolt Documentation](https://www.npmjs.com/package/@slack/bolt)
* [Botkit API Documentation](https://botkit.ai/docs/v0/readme-slack.html#events-api)
* [dev.to/oghenebrume50/building-a-slack-bot-with-nodejs-3g40](https://dev.to/oghenebrume50/building-a-slack-bot-with-nodejs-3g40)
* [chatbotslife.com/build-a-slack-bot-using-node-46054c2dd8ec](https://chatbotslife.com/build-a-slack-bot-using-node-46054c2dd8ec)
* [medium.com/greenroom/the-slack-bot-tutorial-i-wish-existed-d53133f03b13](https://medium.com/greenroom/the-slack-bot-tutorial-i-wish-existed-d53133f03b13)
* [https://github.com/tonglil/slack-here-reminder/blob/master/main.go](https://github.com/tonglil/slack-here-reminder/blob/master/main.go)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/biancakaiserc/botitas.svg?style=flat-square
[contributors-url]: https://github.com/biancakaiserc/botitas/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/biancakaiserc/botitas.svg?style=flat-square
[forks-url]: https://github.com/biancakaiserc/botitas/network/members
[stars-shield]: https://img.shields.io/github/stars/biancakaiserc/botitas.svg?style=flat-square
[stars-url]: https://github.com/biancakaiserc/botitas/stargazers
[issues-shield]: https://img.shields.io/github/issues/biancakaiserc/botitas.svg?style=flat-square
[issues-url]: https://github.com/biancakaiserc/botitas/issues
[license-shield]: https://img.shields.io/github/license/biancakaiserc/botitas.svg?style=flat-square
[license-url]: https://github.com/biancakaiserc/botitas/blob/master/LICENSE.txt
