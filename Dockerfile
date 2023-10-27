# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Expose port 3000 for the app to be accessible
EXPOSE 3000

# Command to run the app
CMD [ "npm", "run", "dev" ]
