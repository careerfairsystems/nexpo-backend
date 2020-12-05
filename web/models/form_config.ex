defmodule Nexpo.FormConfig do
  use Nexpo.Web, :model
  use Arc.Ecto.Schema

  alias Nexpo.Repo
  alias Nexpo.FormConfig

  schema "form_configs" do
    field(:deadline, :utc_datetime)
    field(:max_response, :integer)
    field(:published, :boolean)

    has_one(:auto_response, Nexpo.AutoResponse, on_delete: :delete_all)
    has_one(:response_handler, Nexpo.ResponseHandler, on_delete: :delete_all)
    has_one(:response_struct, Nexpo.ResponseStruct, on_delete: :delete_all)

    belongs_to(:form, Nexpo.Form, foreign_key: :form_id)

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:deadline, :max_response, :published, :form_id])
    |> validate_required([:deadline, :max_response, :published, :form_id])
    |> foreign_key_constraint(:form_id)
  end

  def build_assoc!(form_config, form_id) do
    form_config
    |> FormConfig.changeset(%{form_id: form_id})
    |> Repo.update!()
  end
end