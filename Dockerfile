FROM elixir:1.10.3

# Install NodeJS 12 and npm
RUN curl -fsSL https://deb.nodesource.com/setup_12.x | bash - && \
    apt update && \
    apt install -y nodejs

# Copy the code to the image
WORKDIR /app
COPY . .

# Install and compile dependencies
RUN npm run setup

# Start dev server as default
CMD npm run dev
