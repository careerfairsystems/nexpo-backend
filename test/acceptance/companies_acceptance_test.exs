defmodule Nexpo.CompaniesAcceptanceTest do
  use Nexpo.ConnCase

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  @tag :logged_in
  test "GET /companies returns all companies", %{conn: conn} do
    companies = Factory.insert_list(3, :company)
    conn = conn |> get("/api/companies")

    assert json_response(conn, 200)
    response = Poison.decode!(conn.resp_body)["data"]
    assert length(response) == length(companies)
  end

  @tag :logged_in
  test "GET /companies returns empty list if there are no companies", %{conn: conn} do
    conn = conn |> get("/api/companies")

    assert json_response(conn, 200)
    response = Poison.decode!(conn.resp_body)["data"]
    assert length(response) == 0
  end

  @tag :logged_in
  test "GET /companies returns data in the correct format", %{conn: conn} do
    Factory.insert(:company) |> Factory.with_entries(2)
    Factory.insert(:company) |> Factory.with_entries(3)
    conn = conn |> get("/api/companies")

    response = Poison.decode!(conn.resp_body)["data"]

    schema =
      %{
        "type" => "array",
        "minItems" => 2,
        "items" => %{
          "type" => "object",
          "additionalProperties" => false,
          "properties" => %{
            "id" => %{"type" => "integer"},
            "name" => %{"type" => "string"},
            "logo_url" => %{"type" => "string"},
            "top_students" => %{"type" => "array"},
            "description" => %{"type" => "string"},
            "website" => %{"type" => "string"},
            "student_session_days" => %{"type" => "integer"},
            "entries" => %{
              "type" => "array",
              "minItems" => 2
            },
            "host_name" => %{"type" => "string"},
            "host_mail" => %{"type" => "string"},
            "host_phone_number" => %{"type" => "string"}
          }
        }
      }
      |> ExJsonSchema.Schema.resolve()

    assert ExJsonSchema.Validator.validate(schema, response) == :ok
  end

  @tag :logged_in
  test "GET /companies/:id returns data in the correct format", %{conn: conn} do
    company = Factory.insert(:company, %{id: 3}) |> Factory.with_entries(2)
    conn = conn |> get("/api/companies/#{company.id}")

    response = Poison.decode!(conn.resp_body)["data"]

    schema =
      %{
        "type" => "object",
        "additionalProperties" => false,
        "properties" => %{
          "id" => %{"type" => "integer"},
          "name" => %{"type" => "string"},
          "logo_url" => %{"type" => "string"},
          "description" => %{"type" => "string"},
          "website" => %{"type" => "string"},
          "student_session_days" => %{"type" => "integer"},
          "top_students" => %{"type" => "array"},
          "entries" => %{
            "type" => "array",
            "minItems" => 2
          },
          "users" => %{"type" => "array"},
          "student_session_applications" => %{"type" => "array"},
          "student_sessions" => %{"type" => "array"},
          "student_session_time_slots" => %{"type" => "array"},
          "host_name" => %{"type" => "string"},
          "host_mail" => %{"type" => "string"},
          "host_phone_number" => %{"type" => "string"}
        }
      }
      |> ExJsonSchema.Schema.resolve()

    assert ExJsonSchema.Validator.validate(schema, response) == :ok
  end
end
