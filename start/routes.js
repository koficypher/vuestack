'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

Route.get("hello", () => {
  return { message: "Hello from the backend" };
}).prefix("api")
Route.post("post-example", () => {
  return { message: "Nice post!" };
}).prefix("api")

// This has to be the last route
Route.any('*', ({view}) =>  view.render('app'))
