defmodule Nexpo.Repo.Migrations.CreateEventTicketsTable do
  use Ecto.Migration

  def change do
    create table(:event_tickets) do
      add(:event_id, references(:events, on_delete: :delete_all))
      add(:student_id, references(:students, on_delete: :delete_all))

      timestamps()
    end
  end
end
