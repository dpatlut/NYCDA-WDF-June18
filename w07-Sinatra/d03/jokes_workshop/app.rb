require 'sinatra'
require 'rubyjokes'
require './turtle.rb'

joke = RubyJoke.new

frank = Turtle.new('frank', 60)
leo = Turtle.new('leo', 90)
mike = Turtle.new('mike', 7)
raph = Turtle.new('raph' , 90)


#rendering a specific erb template
get '/test/mypage' do 
    erb :index
end

get '/' do 
    erb :homepage
end

# get '/surprise' do 
#     joke.get_single_joke
# end

# get '/:type' do 
#     joke_type = params[:type]

#     if joke_type == "nerdy"
#        joke.get_joke({limitTo: ['nerdy']})
#     elsif joke_type == "nsfw"
#         joke.get_joke({limitTo: ['explicit']})
#     else 
#         puts 'next'
#     end
# end

get '/surprise' do 
    my_surprise_joke = joke.get_single_joke
    # @my_surprise_joke = joke.get_single_joke
    my_surprise_joke2 = joke.get_single_joke
    my_surprise_joke3 = joke.get_single_joke
    @my_jokes = [my_surprise_joke, my_surprise_joke2, my_surprise_joke3]
    erb :surprise
end

get '/tmnt' do 
    @my_tmnt = [frank, leo, mike, raph]
    erb :turtles
end


