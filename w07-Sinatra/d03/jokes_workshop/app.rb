require 'sinatra'
require 'rubyjokes'

joke = RubyJoke.new

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



