# Developer Requirements Chat

A clean, modern developer chat interface similar to Claude.ai's design, implemented in vanilla JavaScript and HTML, deployable to GitHub Pages. The interface serves as a unified requirements gathering system that integrates with Jira and Confluence AI agents.

## Project Overview
Create a GitHub repository with a clean, modern developer chat interface similar to Claude.ai's design, implemented in vanilla JavaScript and HTML, deployable to GitHub Pages. The interface serves as a unified requirements gathering system that integrates with Jira and Confluence AI agents.

## Repository Structure
```
developer-requirements-chat/
├── index.html
├── styles/
│   ├── main.css
│   ├── chat.css
│   └── components.css
├── scripts/
│   ├── main.js
│   ├── chat-handler.js
│   ├── agents/
│   │   ├── jira-agent.js
│   │   └── confluence-agent.js
│   └── utils/
│       ├── api-client.js
│       └── helpers.js
├── assets/
│   └── icons/
└── README.md
```

## Deployment
This project is designed to be deployed on GitHub Pages.

### Setup
1. Clone the repository.
2. Configure the `CONFIG` object in `scripts/main.js` with your Jira and Confluence API details.
3. Push the code to your GitHub repository.
4. Enable GitHub Pages in your repository settings.

## Usage
Open the deployed GitHub Pages URL in your browser to start using the chat interface.