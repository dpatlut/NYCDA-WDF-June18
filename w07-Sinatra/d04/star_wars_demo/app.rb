require 'sinatra'
require 'swapir'

get '/' do 
    erb :search
end

post '/search' do 
    selected = params[:selected]
    if selected == "films"
        @info = Swapir.get_all_films
    elsif selected == "peopleid"
        @info = Swapir.find_person(params[:search_input])
    end
    erb :search_results
end