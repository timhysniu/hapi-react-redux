This is a react-redux boilerplate with hapi on server side using `create-react-app`.


## Get Started

On first terminal run the hapi server:

```
npm i
npm run server-dev
```

Then on second terminal run webpack development server:

```git clone git@github.com:timhysniu/hapi-react-redux-boilerplate.git
cd client
npm i
npm start
```

Webpack development will have react-redux and your components. It will also support hot-reloading.
Most importantly it will proxy all requests to server side without running into any CORS issues.

If you want to get fancier you could use `concurrently` module. Details on how to do this can be found in [this article](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)

Enjoy!


