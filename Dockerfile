# docker run -d -p 1122:1122 -p 2233:2233  react-app-qiankun:latest

# Setp1. Build dist
FROM node:16-alpine AS builder

COPY ./ /root
WORKDIR /root
RUN npm config set registry https://registry.npmmirror.com/ \
  && npm run app:install \
  && npm run app:build

# Step2. Put into nginx
FROM nginx:1.21.4-alpine

ARG REPO_URL
ARG BRANCH
ARG COMMIT_REF
LABEL repo-url=$REPO_URL
LABEL branch=$BRANCH
LABEL commit-ref=$COMMIT_REF

COPY --from=builder /root/config/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /root/build /usr/share/nginx/html/main
COPY --from=builder /root/react-app-qiankun-sub/build /usr/share/nginx/html/sub

# Default port exposure
# EXPOSE 1122
# EXPOSE 2233

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html/main
COPY ./env.sh .
COPY .env.production.local .

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/sh", "-c", "/usr/share/nginx/html/main/env.sh && nginx -g \"daemon off;\""]
