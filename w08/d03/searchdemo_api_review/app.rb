require 'sinatra'
require 'HTTParty'

get '/' do 
    erb :home
end

get '/search' do 
        input = params[:query]
        return_value = HTTParty.get("https://api.edamam.com/search?q=#{input}&app_id=#{ENV['EDAMAM_ID']}&app_key=#{ENV['EDAMAM_KEY']}")
        # @@response = JSON.parse(return_value.body)
        @response = JSON.parse(return_value.body)
        # puts @@response[0]
        puts @response
        # erb :search
end
