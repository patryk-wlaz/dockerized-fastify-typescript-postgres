FROM node:11.14.0-alpine

# setup paths
ARG ROOT_PATH=/var/www/app
RUN mkdir -p $ROOT_PATH

# Define working directory
WORKDIR $ROOT_PATH

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# set env after npm i to get also dev deps
ENV NODE_ENV=production

# Copy app directory into app
COPY . .

# Build app
RUN npm run build

# uninstall dev dependencies after build
RUN npm prune

# Expose port used by app
EXPOSE $PORT

# Run app as non root user due to security reasons
USER node

# Run app
CMD ["npm", "prod"]
