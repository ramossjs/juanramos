FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --base-href /

FROM httpd:2.4

COPY --from=build /app/dist/mycv/browser/ /usr/local/apache2/htdocs/

EXPOSE 80
