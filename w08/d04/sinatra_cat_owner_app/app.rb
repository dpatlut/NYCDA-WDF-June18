require 'sinatra'
require "sinatra/activerecord"

require './models/cat.rb'
require './models/owner.rb'

set :database, {adapter: "postgresql", database: "cat_owners"}

get '/' do 
    erb :index
end

get '/owners' do 

end

get '/owners/:id/cats' do 

end

get '/cats' do 

end

get '/cats/:id' do 

end