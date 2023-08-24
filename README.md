# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Getting setup

So to get this setup you need to have Vite loaded in a terminal, nodemon server loaded in a terminal, and a mysql server setup and with a functional db.
For this you will need to already have nodejs installed, and mysql installed.

In 3 separate terminals run:

```
scalesandslumbers/frontend$ npm install
scalesandslumbers/frontend$ npm run dev
scalesandslumbers/backend$ npm install
scalesandslumbers/backend$ npm run dev
scalesandslumbers/backend/scripts/db$ mysql -u root -p < initialize_database.sql
scalesandslumbers/backend/scripts/db$ node product_insertion.js
```

You need to make sure that you can connect to mysql using the command ```mysql -u root -p``` and also make sure that whatever you set the password to that
you set it inside the "product_insertion.js" file.

### ASSUMING you can log into mysql

Run setup.sh and you should see that everything has been setup for you
