# RememberThisName.org

## Objective

This is to be a site and service dedicated to helping people remember victims of tragic events.

### Why?

I live in Sandy Hook and I want to collect and learn more about the good people involved with other tragic events. If others benefit from this, great. If not, at least I will learn about people that were taken too soon and missed by their families and friends.

## Developing

RememberThisName.org is build with Node.js and Dust.js.

Install [node.js](http://nodejs.org/) to run Node.
Install [foreman](http://ddollar.github.com/foreman/) to run this Procfile-based project.

    $ git clone https://github.com/jaxzin/rememberthisname.git
    $ cd rememberthisname
    $ npm install
    $ foreman start

## Troubleshooting

Use [node-inspector](https://github.com/dannycoates/node-inspector)

    $ gem install node-inspector
    ... start node with --debug switch ...
    $ node-inspector &
    ... open localhost:8080 ...

## Running on Heroku

Assumes your local environment is already:

> * [Setup to deploy to Heroku](http://devcenter.heroku.com/articles/quickstart).
> * Setup with [node](http://nodejs.org/) and [npm](http://npmjs.org/)


    $ git clone http://github.com/jaxzin/rememberthisname.git
    $ cd rememberthisname
    $ heroku create --stack cedar
    $ git push heroku master
    ... wait for it to push and launch ...
    $ heroku ps:scale web=1
    $ heroku config:add NODE_ENV=production
    ... wait for it to add the config vars and restart ...
    $ heroku open

## Light Reading

* [Node.js](http://nodejs.org/)
* [Node Package Manager (npm)](http://npmjs.org/)
* [Dust.js](http://akdubya.github.com/dustjs/)
* [Backbone.js](http://documentcloud.github.com/backbone/)

## Credit

Heavily based on [Lilac](https://github.com/brikis98/lilac/)