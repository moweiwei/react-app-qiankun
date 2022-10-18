# react-app-qiankun

The following commands are batch execution of the main app and sub app.

main app will run at `localhost:1212`; sub app win run at `localhost:2323`

nginx 配置文件位置： `/config/nginx.conf`

## Install dependencies

`npm run app:install`

## Run

`npm run app:run`

## Build

`npm run app:build`

## Run by docker compose

`docker compose up -d`

## Build docker images

`docker build -t react-app-qiankun .`

## Run by docker images

`docker pull caas4/react-app-qiankun:latest`

`docker run -d --name react-app-qiankun -p 1122:1122 -p 2233:2233 --restart=always -v /Users/moweiwei/github/moweiwei/react-app-qiankun-main/config/nginx.conf:/etc/nginx/nginx.conf react-app-qiankun:latest`
