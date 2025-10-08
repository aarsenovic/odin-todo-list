# Stage 1- Build app using Node
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependecies
RUN npm install

# Copy everything else (your source files...)
COPY . .

# Build the app (Webpack will output to /app/dist)
RUN npm run build

# Stage 2 serve with Nginx
FROM nginx:alpine

# Copy built files from previous stage to Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html


# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
