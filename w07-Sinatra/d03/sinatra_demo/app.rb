require 'sinatra'
require 'sinatra/reloader'
require './turtle.rb'

get '/' do
    #Cant access this information from client side
    y = 10
    x = 5
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

get '/test' do 
    puts_stuff
end

def puts_stuff 
    puts "hello world"
end