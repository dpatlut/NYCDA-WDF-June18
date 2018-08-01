require 'sinatra'
require 'sinatra/reloader'
require './turtle.rb'

get '/' do
    #VV Cant access this information from client side (x,y)
    y = 10
    x = 5
    # ^^ Cant access this information from client side (x,y)
    "<a href='/turtle'>Go to my turtle page</a>"
end

get '/turtle/:name' do 

    puts "LOOK DOWN HERE VVVV"
    puts params[:name]
    puts "PARAMS NAME ^^^^"

    turtle_name = params[:name]

    "Hello #{turtle_name}"

    # if turtle_name == "bobby"
    #     "Hello Bobby"
    # elsif turtle_name == "david"
    #     "Hello David"
    # else
    #     "Hello Other TMNT"
    # end
    # bob = Turtle.new('bobby', 15)
    # "#{bob.name}"
end
