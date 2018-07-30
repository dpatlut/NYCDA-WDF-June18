require 'rest-client'
require 'pry'
require 'chuck_norris'
#https://github.com/miaout17/lolize
require 'rainbow'



class ChuckJokes


  def help
    puts 'Enter "ruby app.rb random" for a random joke'
    puts 'Enter "ruby app.rb {id}" for a joke with a specific ID'
    puts 'Enter "ruby app.rb {first_name} {last_name}" for a joke with a customized name'
  end

  def get_joke_by_id(id)
    ChuckNorris::JokeFinder.find_joke(id.to_i).joke
  end

  def replace_name(first_name, last_name)
    ChuckNorris::JokeFinder.get_joke(first_name: 'David', last_name: 'Patlut').joke
  end

  def random
    ChuckNorris::JokeFinder.get_joke.joke
  end

end