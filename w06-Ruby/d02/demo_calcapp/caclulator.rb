# user_options = ARGV
# operation = ARGV[0]
# first_number = ARGV[1].to_f
# second_number = ARGV[2].to_f

# if operation == "subtract"
#     result = first_number - second_number
#     puts result
# elsif operation == "multiply"
#     result = first_number * second_number
#     puts result
# elsif operation == "divide"
#     result = first_number/second_number
#     puts result
# else
#     puts "You did not enter a valid operation"
# end

puts "Welcome to the calculator app"
puts "Please enter your operation"
operation = gets.chomp
puts "Please enter your first number"
first_number = gets.chomp.to_i
puts "Please enter your second number"
second_number = gets.chomp.to_i

if operation == "subtract"
    result = first_number - second_number
    puts result
elsif operation == "multiply"
    result = first_number * second_number
    puts result
elsif operation == "divide"
    result = first_number/second_number
    puts result
else
    puts "You did not enter a valid operation"
end