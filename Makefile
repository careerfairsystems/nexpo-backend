setup:
	npm install
	mix deps.get
	mix deps.compile
	mix ecto.setup
	mix run priv/repo/seeds.exs

run-dev:
	npm run dev

reset-db:
	mix ecto.reset
	mix run priv/repo/seeds.exs
