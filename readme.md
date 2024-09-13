# API Proxy Server

A simple API proxy server built with Node.js and Express.js. This server proxies requests to a public API (e.g., GitHub API) with features such as rate limiting, caching, authentication, and logging.

## Features

- **Rate Limiting**: Limits requests to 5 per minute per IP address.
- **Caching**: Caches successful API responses for 5 minutes.
- **Error Handling**: Handles errors from external API calls gracefully.
- **Logging**: Logs each request with timestamp, IP address, and rate limit status.
- **Authentication**: Secures the API endpoint with a simple token-based authentication mechanism.
- **Configurable**: Rate limit and cache duration are configurable via environment variables.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/rajnish0808/api-proxy-server.git
   cd api-proxy-server

2. **Install Dependencies**
   npm install

3. **Create a .env File**
   PORT=3001
   API_URL=https://api.github.com
   RATE_LIMIT=5
   CACHE_DURATION=300
   AUTH_TOKEN=12345678

4. **Run the server**
   node server.js



