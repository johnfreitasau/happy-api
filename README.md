<h1 align="center">
  HAPPY - API
</h1>

<h3 align="center">
  Happy - Spread happiness Into The World.
</h3>
<h4 align="center"> NodeJS | GraphQL | Apollo Server | Express | TypeORM | PostgreSQL </h4>


<!-- E02041 -->
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/johnfreitasau/happy-api?color=%2329B6D1">
  <a href="https://www.linkedin.com/in/johnfreitasau/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-John%20Freitas-%2329B6D1"></a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/johnfreitasau/happy-api?color=%2329B6D1">
  <a href="https://github.com/johnfreitasau/happy-api/commits/main"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/johnfreitasau/happy-api?color=%2329B6D1"></a>
  <a href="https://github.com/johnfreitasau/happy-api/issues"><img alt="Repository issues" src="https://img.shields.io/github/issues/johnfreitasau/happy-api?color=%2329B6D1"></a>
  <img alt="GitHub" src="https://img.shields.io/github/license/johnfreitasau/happy-api?color=%2329B6D1">
</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction_worker-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#runner-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#postbox-faq">FAQ</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bug-issues">Found a bug? Missing a specific feature?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tada-contributing">Contributing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-license">License</a>
</p>

> [Click here to see the database model](https://dbdiagram.io/d/5fc08b093a78976d7b7d9b10)



# :pushpin: Table of Contents

* [Features](#rocket-features)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [FAQ](#postbox-faq)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [Contributing](#tada-contributing)
* [License](#closed_book-license)


# :rocket: Technologies

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [TypeGraphQL](https://typegraphql.com/)
- [Apollo Server Express](https://www.npmjs.com/package/apollo-server-express)
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://github.com/expressjs/cors#readme)
- [TypeORM](https://typeorm.io/#/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)


# :rocket: Features

Queries:
* List Orphanages

* Create new Orphanage
* See Orphanage Details

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```
git clone https://github.com/johnfreitasau/happy-api.git
```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you use a SSH key registered in your Github account, clone the project using this command:

```
git clone git@github.com:johnfreitasau/happy-api.git
```

**Install dependencies**

```
yarn install
```

Or

```
npm install
```

Create your environment variable based on the example of ```.env.example```

```
cp .env.example .env
```


Create your ormconfig.json file based on the example ```ormconfig.example.json```

```
cp ormconfig.example.json ormconfig.json
```


After copying the examples, make sure to fill the variables with new the values.

**Setup a database**

You must install [Docker](https://www.docker.com/) in your machine, fill the environment values based on your database configuration, then run the following command in order to create the Postgres container.

Example:
```
# Create the postgreSQL instance using docker
$ docker run --name happy-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=happy -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres
```


# :runner: Getting Started

Run the transactions in order to configure the database schema

```yarn typeorm migration:run```

Run the following command in order to start the application in a development environment:

```
1st terminal -> yarn watch

2nd terminal - yarn dev
```

# :postbox: Faq

**Question:** What are the technologies used in this project?

**Answer:** The technologies used in this project are NodeJS, GraphQL with Apollo Server, Express, TypeORM and PostgreSQL.

# :bug: Issues

Feel free to **file a new issue** with a respective title and description on the the [Happy API](https://github.com/johnfreitasau/happy-api/issues) repository. If you already found a solution to your problem, **I would love to review your pull request**! Have a look at our [contribution guidelines](https://github.com/johnfreitasau/happy-api/blob/main/CONTRIBUTING.md) to find out about the coding standards.

# :tada: Contributing

Check out the [contributing](https://github.com/johnfreitasau/happy-api/blob/main/CONTRIBUTING.md) page to see the best places to file issues, start discussions and begin contributing.

# :closed_book: License

Released in 2020.
This project is under the [MIT license](https://github.com/johnfreitasau/happy-api/LICENSE).
