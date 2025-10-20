FROM node:24-alpine
RUN corepack enable pnpm
WORKDIR /app
COPY . /app
RUN pnpm install
EXPOSE 5173
CMD ["pnpm", "dev"]
