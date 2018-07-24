computer_number = rand(1..10)
current_guesses = []

puts "Please enter a number between 1 and 10."
number_of_guesses = 1
player_guess = gets.chomp.to_i

while player_guess != computer_number
    if current_guesses.include?(player_guess)
        puts "You already guessed this number"
    else
        current_guesses.push(player_guess)
        number_of_guesses += 1
    end

    puts "Your current guesses: " << current_guesses.to_s
    puts "TRY AGAIN"
    puts "Please enter a number between 1 and 10."
    player_guess = gets.chomp.to_i
end

puts "You guessed " << number_of_guesses.to_s << " number of times"
puts "YOU GOT IT"