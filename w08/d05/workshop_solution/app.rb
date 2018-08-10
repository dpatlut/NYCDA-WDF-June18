require 'sinatra'
require 'sinatra/activerecord'
require './models/dog.rb'
require './models/owner.rb'



set :database, {adapter: "postgresql", database: "dog_owners"}


get '/' do 
    erb :homepage
end