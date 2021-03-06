defmodule Nexpo.BlipControllerTest do
  """
  use Nexpo.ConnCase

  alias Nexpo.Blip

  @valid_attrs %{
    comment: "some content",
    rating: 3,
    student_id: 1,
    company_id: 1
  }
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  @tag :logged_in
  test "shows chosen resource", %{conn: conn} do
    blip = Repo.insert!(%Blip{})
    conn = get(conn, blip_path(conn, :show, blip))

    assert json_response(conn, 200)["data"] == %{
             "id" => blip.id,
             "rating" => blip.rating,
             "comment" => blip.comment,
             "student_id" => blip.student_id,
             "company_id" => blip.company_id
           }
  end

  @tag :logged_in
  test "lists all entries on index", %{conn: conn} do
    conn = get(conn, blip_path(conn, :index))
    assert json_response(conn, 200)["data"] == []
  end

  @tag :logged_in
  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent(404, fn ->
      get(conn, blip_path(conn, :show, -1))
    end)
  end

  @tag :logged_in
  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post(conn, blip_path(conn, :create), blip: @valid_attrs)
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Blip, @valid_attrs)
  end

  @tag :logged_in
  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post(conn, blip_path(conn, :create), blip: @invalid_attrs)
    assert json_response(conn, 422)["errors"] != %{}
  end

  @tag :logged_in
  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    blip = Repo.insert!(%Blip{})
    conn = put(conn, blip_path(conn, :update, blip), blip: @valid_attrs)
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Blip, @valid_attrs)
  end

  @tag :logged_in
  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    blip = Repo.insert!(%Blip{})
    conn = put(conn, blip_path(conn, :update, blip), blip: @invalid_attrs)
    assert json_response(conn, 422)["errors"] != %{}
  end

  @tag :logged_in
  test "deletes chosen resource", %{conn: conn} do
    blip = Repo.insert!(%Blip{})
    conn = delete(conn, blip_path(conn, :delete, blip))
    assert response(conn, 204)
    refute Repo.get(Blip, blip.id)
  end
  """
end
