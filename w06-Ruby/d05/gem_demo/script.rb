require 'rainbow'
require 'rest-client'
require 'pry'
require 'chuck_norris'

# puts Rainbow("this is red").faint
# random_joke = ChuckNorris::JokeFinder.get_joke
# # puts random_joke
# puts random_joke.joke

def test 
    random_joke = ChuckNorris::JokeFinder.get_joke
    puts random_joke.joke
end

test