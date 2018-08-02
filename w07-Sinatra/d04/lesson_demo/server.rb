require 'sinatra'

get '/search' do 
    puts params
    'Hello World'
end

get '/formsend' do
    erb :search
end