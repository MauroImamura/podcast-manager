## Podcast Manager

> Node web api for managing famous podcast contents. It presents the set of information completely or filtered by name. For this version, there is a sample collection of fake podcast data for testing.
> No framework was used in this project.

![podcast manager cover](./assets/podcast-manager-tool-node.jpg "podcast manager cover")

### Feature:

  - /api/lists

    Returns the full list of podcasts in database.

    ```js
    [
      {
        podcastName:"channel name",
        episode: "source video title",
        cover: "url for cover image",
        link: "url for source video on yt",
        category: ["topic1", "topic2", "topic3"]
      }
    ]
    ```

      - /api/filters?p=

      Returns the list of podcasts produced by a given channel. The required param (p) is the podcast channel name.

    ```js
    [
      {
        podcastName:"channel name",
        episode: "source video title",
        cover: "url for cover image",
        link: "url for source video on yt",
        category: ["topic1", "topic2", "topic3"]
      }
    ]
    ```

### Archtecture

![Archtecture drawing](./assets/archtecture.png "archtecture")

### Technologies

This project leverages the following technologies and tools:

  - Node.js: Runtime environment for executing JavaScript on the server.
  - TypeScript: A typed superset of JavaScript that adds static typing.
  - TSX: Tool for running TypeScript files directly, useful for local development.
  - Tsup: Bundler to generate the project’s production build.
  - @types/node: Node.js type definitions for TypeScript support.
  - dotenv: (via --env-file) Used to load environment variables from .env files.

### Setup and run

#### Prerequisites
- Node.js installed (recommended version: 18+)
- npm or yarn installed

#### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MauroImamura/podcast-manager.git
   cd podcast-manager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or if using yarn:
   yarn install
   ```

3. **Set up the environment:**  
   Create a `.env` file in the project root and configure your environment variables as needed. Example:
   ```
   PORT=3000
   ```

4. **Run in development mode:**  
   This command starts the server with TypeScript without requiring manual builds.
   ```bash
   npm run start:dev
   ```

5. **Run in watch mode:**  
   Automatically restarts the server on code changes.
   ```bash
   npm run start:watch
   ```

6. **Build for production:**  
   Creates the final build in the `dist/` folder.
   ```bash
   npm run dist
   ```

7. **Run the production build:**  
   Builds and starts the server with Node.js.
   ```bash
   npm run start:dist
   ```

8. **Access the server:**  
   The server will start on the port defined in the `.env` file. By default, access:
   ```
   http://localhost:3000
   ```

---

With these steps, you’ll be able to run and test the project locally as well as generate production-ready builds.

