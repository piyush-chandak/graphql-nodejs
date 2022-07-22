# GraphQL NodeJS Integration
A simple app to integrate GraphQL. We will create rest api and how we can integrate GraphQL with it.

I have created a small blogging app having User, Blog and Review table.

### Association
- User has many Blogs
- User has many Review
- Blog belong to User
- Blog has many Reviews
- Review belong to Blog
- Review belong to User

### Installation

**Step 1:** Clone the repo ```git clone https://github.com/piyush-chandak/graphql-nodejs.git```

**Step 2:** Install all dependencies by ```npm install```

**Step 3:**
If you need to run normal node app
```npm run build```

If you need to run node app with nodemon
```npm run listen```

### Module Used
1. express
2. pg and pg-hstore
3. sequelize and sequelize-cli
4. nodemon
5. body-parser


### Helping Resources
- https://blog.logrocket.com/crud-react-graphql-examples/
- https://www.youtube.com/watch?v=WxBMUpjDMDw&ab_channel=MichaelBromley