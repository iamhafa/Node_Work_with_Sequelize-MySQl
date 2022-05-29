1. This project use dependencies:

   - Express
   - MySQL2
   - Sequelize (ORM to practice with MySQL)
   - Sequelize-CLI (CLI to practice with Sequelize)
   - JWT (to authenticate users)
   - Bcrypt (to encrypt passwords)
   - Winston (to log information, errors)
   - dotenv (to store sensitive information)
   - Prettier (to format code)
   - ESLint (to lint code)

---

2. Run this command to create database

```
    npx sequelize db:create
```

3. Run this command to migrate model to database (ánh xạ các model vào database)

```
    npx sequelize db:migrate
```

4. Run this command to run project

```
    npm run dev
```

5. Change `sequelize.sync({ force: true })` in file `server.js` replaced to `sequelize.sync({ alter: false })` to seed data

6. Run this command to seed data (create example data)

```
    npx sequelize db:seed:all
```

7. CRUD with file CRUD_with_Postman.js (download this and import to Postman)

8. Check prettier

```
    npm run prettier:check
and
    npm run prettier:write
```

9. check eslint

```
    npm run lint:check
or
    npm run lint:fix
```
