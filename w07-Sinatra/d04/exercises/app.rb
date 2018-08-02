require 'sinatra'

get '/' do 
    erb :form
end

get '/query' do 
    #capture the params from our submitted form
    @username = "Persons Username: " + params[:username] 
    @id = params[:id].to_i * 1000
    erb :results
end

post '/query' do 
    #capture the params from our submitted form
    @username = "Persons Username: " + params[:username] 
    @id = params[:id].to_i * 1000
    erb :results
end