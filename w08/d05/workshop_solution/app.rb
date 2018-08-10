require 'sinatra'
require 'sinatra/activerecord'
require './models/dog.rb'
require './models/owner.rb'
require 'giphy'

Giphy::Configuration.configure do |config|
    config.api_key = ENV['API_GIPHY']
end

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

get '/randomdoggie' do
    random_dog_name = ['gin', 'vodka', 'tonic']
    random_breed = ['corgie', 'pup'] 
    Dog.create(name: random_dog_name.sample, breed: random_breed.sample, age: 20)
    redirect '/dogs'
end           


get '/owners/:id' do 
    #show all dogs that belong to a specific owner
    @specific_owner = Owner.find(params[:id])
    @owners_dogs = @specific_owner.dogs
    erb :specific_owner
end

get '/woof' do 
    # @gif = Giphy.search('funny dog', {limit: 1})
    @gif = Giphy.random('dog')
    erb :woof
end



# Afternooon Lesson

#Index Action -> GET /resource
get '/dogs' do 
    @dogs = Dog.all
    erb :dogs
end

#New Action -> GET /resource/new
get '/dogs/new' do 
    erb :new_dog
end

#Show Action -> GET /resource/:id
get '/dogs/:id' do 
    @specific_dog = Dog.find(params[:id])
    erb :show_dog
end


#Create Action -> POST /resource 
post '/dogs' do 
    Dog.create(name: params[:name], breed: params[:breed], age: params[:age])
    redirect '/dogs'
end

#Edit Action -> GET /resource/:id/edit
get '/dogs/:id/edit' do
    @current_dog = Dog.find(params[:id])
    erb :edit_dog
end


#Update Action -> PUT/PATCH /resource/:id
put '/dogs/:id' do 
    @current_dog = Dog.find(params[:id])
    @current_dog.update(name: params[:name], breed: params[:breed], age: params[:age])
end

delete '/dogs/:id' do 
    @current_dog = Dog.find(params[:id])
    @current_dog.destroy
    redirect '/dogs'
end