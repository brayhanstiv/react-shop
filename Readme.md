<h1 align="center" id="title"> <img src="https://img.icons8.com/color/32/react-native.png"/> React Shop</h1>
<p align="center">
	<img src="https://img.shields.io/badge/Language-JavaScript-FFF719?style=flat" />
	<a href="https://reactjs.org/" target="_blank">	
		<img src="https://img.shields.io/badge/Library-React%20JS-blue?style=flat" />
	</a>
	<a href="https://www.npmjs.com/" target="_blank">	
		<img src="https://img.shields.io/badge/npm-9.6.0-d32d1d?style=flat" />
	</a>
	<a href="https://api.escuelajs.co/docs/" target="_blank">	
		<img src="https://img.shields.io/badge/API-Escuela%20JS-98ca3f?style=flat" />
	</a>
	<a href="https://webpack.js.org/" target="_blank">	
		<img src="https://img.shields.io/badge/Bundler-Webpack-8ACEF2?style=flat" />
	</a>
</p>



![Shop main page](https://github.com/brayhanstiv/react-shop/blob/main/src/assets/scrrenshots/Captura%20de%20pantalla%202023-05-05%20224431.png)
This project is an SPA e-commerce, it receives the products from an API. This project has many views like: Login, create account, home account, new password, orders, password recovery and email send. You can see the project [here](https://react-shop-monoald.netlify.app/) deployed on netlify.
## Environment Configuration
Simple npm v9.6.0 environment, this project is minify with **Webpack** and transpiled with **Babel** for a great browser compatibility. 
### Installation
 Clone the Project.
 `git clone https://github.com/brayhanstiv/react-shop`
 Install dependencies
 `npm install`

### Run Local
On file `webpack.config.js` line 11 change `publicPath` to:

    publicPath:  '/',

Run:

    npm run start

## Deploy
Deployed on Netlify. Solving the SPA url 404 error with the [redirects](https://docs.netlify.com/routing/redirects/) file.
You can see more solutions for this problem [here](https://create-react-app.dev/docs/deployment/#github-pages).

## License

> This project is licensed under the MIT License
## Extra
### Design
This SPA design was created by [Platzi](https://platzi.com/):
- [Design Foundations](https://scene.zeplin.io/project/60afeeed20af1378ed046538)
- [Desktop Design](https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=0%3A999&amp%3Bscaling=scale-down&amp%3Bpage-id=0%3A998&amp%3Bstarting-point-node-id=5%3A2808)
- [Mobile Design](https://www.figma.com/proto/bcEVujIzJj5PNIWwF9pP2w/Platzi_YardSale?node-id=0%3A684&amp;scaling=scale-down&amp;page-id=0%3A1&amp;starting-point-node-id=0%3A719)
### What I learn
Making this project I learn to use React JS to make a SPA, creating routes using react-router-dom. How to work with an API that gives you items for an e-commerce, also how to make a **cart** that will pass their items to a checkout page for the payment.
I learn how to follow a design made by a designer, following some real work flow.

![alt text](https://github.com/brayhanstiv/react-shop/blob/main/src/assets/scrrenshots/Captura%20de%20pantalla%202023-05-05%20224540.png)
![alt text](https://github.com/brayhanstiv/react-shop/blob/main/src/assets/scrrenshots/Captura%20de%20pantalla%202023-05-05%20224700.png)
![alt text](https://github.com/brayhanstiv/react-shop/blob/main/src/assets/scrrenshots/Captura%20de%20pantalla%202023-05-05%20224731.png)
