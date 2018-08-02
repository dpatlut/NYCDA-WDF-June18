require 'sinatra'

get '/search' do 
    puts params
    #send this info to the database
    #create a new person instance from this info
    
end

get '/formsend' do
    erb :search
end