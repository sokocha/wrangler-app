json.array!(@items) do |item|
  json.extract! item, :id, :name, :list_id, :status
  json.url item_url(item, format: :json)
end
