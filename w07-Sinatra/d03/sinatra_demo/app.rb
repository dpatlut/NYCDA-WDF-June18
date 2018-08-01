require 'sinatra'
require './turtle.rb'
# require './sinatra/reloader'

get '/' do
    y = 10
    x = 5
    "<a href='/turtle'>Go to my turtle page</a>"
end

get '/turtle/:name' do 
    puts "LOOK DOWN VVVV"
    puts params[:name]
    puts "NAME ^^^^"

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