require 'sinatra'
require 'sinatra/activerecord'
require './models/dog.rb'
require './models/owner.rb'



set :database, {adapter: "postgresql", database: "dog_owners"}


get '/' do 
    erb :homepage
end

get '/dogs' do 
    @dogs = Dog.all
    erb :dogs
end 

get '/owners' do 
    @owners = Owner.all
    erb :owners
end


get '/owners/:id' do 
    #show all dogs that belong to a specific owner
    @specific_owner = Owner.find(params[:id])
    @owners_dogs = @specific_owner.dogs
    erb :specific_owner
end


