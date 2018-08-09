require 'sinatra'
require "sinatra/activerecord"

require './models/cat.rb'
require './models/owner.rb'

set :database, {adapter: "postgresql", database: "cat_owners"}

get '/' do 
    erb :index
end

get '/owners' do 
    @all_owners = Owner.all
    erb :owners
end

get '/owners/:id/cats' do 
    specific_owner_id = params[:id]
    @owners_cats = Owner.find(specific_owner_id).cat
    erb :owners_cats
end

get '/cats' do 

end

get '/cats/:id' do 
    id = params[:id]
    @specific_cat = Cat.find(id)
    erb :specific_cat
end