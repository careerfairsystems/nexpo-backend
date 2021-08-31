defmodule Nexpo.Support.View do
  @moduledoc """
  A module that can render all models

  The helper makes sure to render all preloaded associations and ignores
  all relations which are not preloaded
  """
  use Nexpo.Web, :view

  @doc """
  Creates a Map that can be converted to JSON
  """
  def render_object(object, base_params) do
    # Build base object
    base = Map.take(object, base_params)

    # Construct an array with all the rendered relations
    relations =
      Map.keys(object)
      |> Enum.filter(fn r -> Ecto.assoc_loaded?(Map.get(object, r)) end)
      |> Enum.map(fn r -> render_relation(object, r) end)
      |> Enum.reduce(fn x, acc -> Map.merge(acc, x) end)

    # Return base with relations
    Map.merge(base, relations)
  end

  # Defines how to render all possible relations in database
  # Both in plural and singular
  # TODO: Make it more dynamic
  defp render_relation(object, relation) do
    case relation do
      :entries ->
        %{:entries => render_many(object.entries, Nexpo.CompanyEntryView, "company_entry.json")}

      :company ->
        %{:company => render_one(object.company, Nexpo.CompanyView, "company.json")}

      :attribute ->
        %{
          :attribute =>
            render_one(object.attribute, Nexpo.CategoryAttributeView, "category_attribute.json")
        }

      :attributes ->
        %{
          :attributes =>
            render_many(object.attributes, Nexpo.CategoryAttributeView, "category_attribute.json")
        }

      :category ->
        %{:category => render_one(object.category, Nexpo.CategoryView, "category.json")}

      :roles ->
        %{:roles => render_many(object.roles, Nexpo.RoleView, "role.json")}

      :blips ->
        %{:blips => render_many(object.blips, Nexpo.BlipView, "blip.json")}

      :user ->
        %{:user => render_one(object.user, Nexpo.UserView, "user.json")}

      :users ->
        %{:users => render_many(object.users, Nexpo.UserView, "user.json")}

      :student ->
        %{:student => render_one(object.student, Nexpo.StudentView, "student.json")}

      :representative ->
        %{
          :representative =>
            render_one(object.representative, Nexpo.RepresentativeView, "representative.json")
        }

      :programme ->
        %{:programme => render_one(object.programme, Nexpo.ProgrammeView, "programme.json")}

      :interests ->
        %{:interests => render_many(object.interests, Nexpo.InterestView, "interest.json")}

      :event_tickets ->
        %{
          :event_tickets =>
            render_many(object.event_tickets, Nexpo.EventTicketView, "event_ticket.json")
        }

      :event_info ->
        %{:event_info => render_one(object.event_info, Nexpo.EventInfoView, "event_info.json")}

      :student_session_applications ->
        %{
          :student_session_applications =>
            render_many(
              object.student_session_applications,
              Nexpo.StudentSessionApplicationView,
              "student_session_application.json"
            )
        }

      :student_session ->
        %{
          :student_session =>
            render_one(
              object.student_session,
              Nexpo.StudentSessionView,
              "student_session.json"
            )
        }

      :student_sessions ->
        %{
          :student_sessions =>
            render_many(
              object.student_sessions,
              Nexpo.StudentSessionView,
              "student_session.json"
            )
        }

      :student_session_time_slot ->
        %{
          :student_session_time_slot =>
            render_one(
              object.student_session_time_slot,
              Nexpo.StudentSessionTimeSlotView,
              "student_session_time_slot.json"
            )
        }

      :student_session_time_slots ->
        %{
          :student_session_time_slots =>
            render_many(
              object.student_session_time_slots,
              Nexpo.StudentSessionTimeSlotView,
              "student_session_time_slot.json"
            )
        }

      :logo_url ->
        case Nexpo.CompanyLogo.url(get_url(object, relation), :original) do
          nil ->
            %{:logo_url => nil}

          url ->
            %{:logo_url => "http://localhost:4000/api/uploads" <> Enum.at(String.split(url, "uploads"), 1)}
        end

      :profile_image ->
        case Nexpo.ProfileImage.url(get_url(object, relation), :original) do
          nil ->
            %{:profile_image => nil}

          url ->
            %{:profile_image => "http://localhost:4000/api/uploads" <> Enum.at(String.split(url, "uploads"), 1)}
        end

      :resume_en_url ->
        case Nexpo.CvEn.url(get_url(object, relation), :original) do
          nil ->
            %{:resume_en_url => nil}

          url ->
            %{:resume_en_url => "http://localhost:4000/api/uploads" <> Enum.at(String.split(url, "uploads"), 1)}
        end

      :resume_sv_url ->
        case Nexpo.CvSv.url(get_url(object, relation), :original) do
          nil ->
            %{:resume_sv_url => nil}

          url ->
            %{:resume_sv_url => "http://localhost:4000/api/uploads" <> Enum.at(String.split(url, "uploads"), 1)}
        end

      _ ->
        %{}
    end
  end

  defp get_url(object, attribute) do
    file_name = Map.from_struct(object) |> get_in([attribute, :file_name])
    {file_name, object}
  end

  defp get_filename(object, attribute) do
    Map.from_struct(object) |> get_in([attribute, :file_name])
  end
end
