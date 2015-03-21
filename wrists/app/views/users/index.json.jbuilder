json.array!(@users) do |user|
  json.extract! user, :id, :role, :username
  json.url user_url(user, format: :json)
end
