defmodule Nexpo.CvEn do
  use Arc.Definition

  # Include ecto support (requires package arc_ecto installed):
  use Arc.Ecto.Definition

  @versions [:original]

  # To add a thumbnail version:
  # @versions [:original, :thumb]

  # Override the bucket on a per definition basis:
  # def bucket do
  #   :custom_bucket_name
  # end

  # Whitelist file extensions:
  def validate({file, _}) do
    ~w(.pdf) |> Enum.member?(Path.extname(file.file_name))
  end

  # Define a thumbnail transformation:
  # def transform(:thumb, _) do
  #   {:convert, "-strip -thumbnail 250x250^ -gravity center -extent 250x250 -format png", :png}
  # end

  # Override the persisted filenames:
  # We use this so other file name can't be guessed
  def filename(version, {_, scope}) do
    "cv_en"
  end

  # Override the storage directory:
  def storage_dir(_, {_, scope}) do
    case scope do
      %Nexpo.User{} ->
        case Map.get(scope, :student_id) do
          nil ->
            "uploads/students/#{scope.student.id}/cv/en"

          id ->
            "uploads/students/#{id}/cv/en"
        end

      %Nexpo.Student{} ->
        "uploads/students/#{scope.id}/cv/en"
    end
  end

  # Provide a default URL if there hasn't been a file uploaded
  # def default_url(version, scope) do
  #   "/images/avatars/default_#{version}.png"
  # end

  # Specify custom headers for s3 objects
  # Available options are [:cache_control, :content_disposition,
  #    :content_encoding, :content_length, :content_type,
  #    :expect, :expires, :storage_class, :website_redirect_location]
  #
  # def s3_object_headers(version, {file, scope}) do
  #   [content_type: MIME.from_path(file.file_name)]
  # end
end
