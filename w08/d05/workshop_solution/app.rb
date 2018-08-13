require 'sinatra'
require 'sinatra/activerecord'
require './models/dog.rb'
require './models/owner.rb'
require './models/user.rb'
require 'sinatra/flash'
require 'giphy'

enable :sessions

Giphy::Configuration.configure do |config|
    config.api_key = ENV['API_GIPHY']
end

set :database, {adapter: "postgresql", database: "dog_owners"}

#Sign In Form Route
get '/signin' do 
    erb :sign_in
end

#Sign In Route
post '/signin' do 
    user = User.find_by(username: params[:username])

    #If the user exists, and thier password is correct, then create a session and redirect them to a logged in page
    if user && user.password == params[:password]
        #Create the cookie with the users id
        session[:user_id] = user.id
        #Print a helpful message
        flash[:info] = "#{user.username} has logged in"
        #redirect to homepage
        redirect '/'
    else 
        flash[:warning] = "Your username does not exist or your password is not correct"
        redirect '/signin'
    end

end

#Sign Up Form Route

get '/signup' do 
    erb :sign_up
end

#Sign Up Route

post '/signup' do 
    user = User.create(
        username: params[:username],
        password: params[:password]
    )
    session[:user_id] = user.id
    redirect '/'
end





get '/' do
    if session[:user_id] 
        erb :homepage
    else
        erb :sign_in
    end
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

private

def get_current_user 
    User.find(session[:user_id])
end

def get_specific_dog(id)
    Dog.find(id)
end