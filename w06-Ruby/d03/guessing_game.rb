def computer_picks_number(range)
  the_number = rand(1..range)
  puts the_number
  return the_number
end

def player_guess(current_num)
# prompts the user to enter a number
  puts "Enter a number"
  guess_number = gets.chomp.to_i
  puts "You guessed #{guess_number}"
  give_hint(guess_number, current_num)
  return guess_number
end

def evaluate_guess(guess_number, current_num)
  while guess_number != current_num
    guess_number = player_guess(current_num)
  end
  puts "You won yay"
end

def give_hint(player_guess, current_num)
  if player_guess > current_num
    puts "Guess lower!"
  elsif player_guess < current_num
    puts "Guess higher!"
  end
end



#prompt user to being the game
puts "Welcome to my guessing game, I have picked a number between 1-10 and you will have to guess which one. I will give you hints along the way"
puts "pick a range"
user_range_input = gets.chomp.to_i
random_number = computer_picks_number(user_range_input)
puts "Enter a number:"
#pick the random number
user_input_number = gets.chomp.to_i
#evaluate the number to see if they won
evaluate_guess(user_input_number, random_number)