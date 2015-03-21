json.array!(@lists) do |list|
  json.extract! list, :id, :user_id, :title
  json.url list_url(list, format: :json)
end
