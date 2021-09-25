FROM elixir:1.10.3

# Install NodeJS 12 and npm
RUN curl -fsSL https://deb.nodesource.com/setup_12.x | bash - && \
    apt update && \
    apt install -y nodejs

# Copy the code to the image
WORKDIR /app
COPY . .

# Install and compile dependencies
RUN mix local.hex --force && \
    mix local.rebar --force && \
    mix deps.get && \
    mix deps.compile && \
    npm install

# Setup database and start dev server on image run
CMD mix ecto.setup && \
    mix ecto.reset && \
    mix run priv/repo/seeds.exs && \
    npm run dev

