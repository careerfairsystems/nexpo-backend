defmodule Nexpo.Repo.Migrations.EventTicketsToCapacity do
  use Ecto.Migration

  def change do
    rename table(:event_infos), :tickets, to: :capacity
  end
end
