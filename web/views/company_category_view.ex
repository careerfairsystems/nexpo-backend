defmodule Nexpo.CompanyCategoryView do
  use Nexpo.Web, :view

  def render("index.json", %{company_categories: company_categories}) do
    %{data: render_many(company_categories, Nexpo.CompanyCategoryView, "company_category.json")}
  end

  def render("show.json", %{company_category: company_category}) do
    %{data: render_one(company_category, Nexpo.CompanyCategoryView, "company_category.json")}
  end

  def render("company_category.json", %{company_category: company_category}) do
    import Ecto.Query
    #Get categories and attributes
    query  =
    from( category in Nexpo.CompanyCategory,
     where: category.title == ^company_category.title,
     join: attribute in assoc(category, :attributes),
     preload: :attributes
     )

     result = Nexpo.Repo.all(query)
     #Put into a map
     if (result != []) do
     categories = Enum.map(result, fn category ->
     %{id: category.id} |> Map.put(category.title, Enum.map(category.attributes, fn attribute ->
        # Filtering out all metadata. __meta__ Also gives encoding errors for some reason with Poison
        filtered_keys = Map.keys(attribute) |> Enum.filter(fn key ->
          case key do
            :value -> true
            :type -> true
            _ -> false
          end
        end)
        attribute_meta_map = %{}
        attribute_meta_map = Enum.map(filtered_keys, fn key -> Map.put(attribute_meta_map, key, Map.get(attribute, key)) end)
        attribute_meta_map = Enum.reduce(attribute_meta_map ,fn x, acc -> Map.merge(acc, x) end)
        %{} |> Map.put(attribute.title, attribute_meta_map)
      end)
      |> Enum.reduce(fn x, acc -> Map.merge(acc, x) end)
      )
     end)
     #Merge to single object
      Enum.reduce(categories, fn x, acc -> Map.merge(acc, x) end)
      else
      query = from( category in Nexpo.CompanyCategory,
                   where: category.title == ^company_category.title)
      result = Nexpo.Repo.all(query)
      final = %{} |> Map.put(List.first(result) |> Map.get(:title), %{})
      Map.merge(%{id: company_category.id}, final)
    end
  end
end