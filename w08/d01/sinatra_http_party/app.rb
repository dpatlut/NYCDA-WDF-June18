require 'sinatra'
require 'httparty'

get '/' do 
    # response = HTTParty.get('https://pokeapi.co/api/v2/pokemon/1')
    # @stuff = JSON.parse(response.body)

    # response = HTTParty.get("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=#{ENV["API_KEY_WEATHER"]}")
    # @stuff = JSON.parse(response.body)


    #Sample Food App Call
    response = HTTParty.get("https://api.edamam.com/search?app_id=e6aa5c87&app_key=18694538ed06eb438655090e79cc6470& q=chicken")
    @stuff = JSON.parse(response.body)

    #JSON.parse()
    #.to_json
    # erb :index

    erb :weather
end