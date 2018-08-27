json.extract! apartment, :id, :address, :price, :description, :image_url, :created_at, :updated_at
json.url apartment_url(apartment, format: :json)
