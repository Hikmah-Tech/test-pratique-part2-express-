# Introduction to Node.js and Express.js

## Node.js
**Node.js** is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

**Key Features:**
- **Asynchronous & Event-Driven**: All APIs of the Node.js library are asynchronous, meaning a Node.js based server never waits for an API to return data.
- **Single-Threaded but Highly Scalable**: Uses a single threaded model with event looping.
- **Fast**: Built on Google Chrome's V8 JavaScript Engine.

## Express.js
**Express.js**, or simply Express, is a back-end web application framework for Node.js. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

**Key Features:**
- **Web Application**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **APIs**: With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
- **Performance**: Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.
- **Middleware**: Express uses middleware to handle HTTP requests. Middleware functions have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle.

---

### In This Project
We utilized these technologies to build a web application with the following routes:
- **Home**: `/`
- **Our Services**: `/services`
- **Contact Us**: `/contact`

We implemented a custom middleware to restrict access to the application to working hours (Monday to Friday, 9:00 to 18:00).
