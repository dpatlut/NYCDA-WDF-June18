#We should be able to run our app like this:
# ruby script.rb add 1 2
# would return 3

#capture the ARGV array
user_input = ARGV

# puts ARGV -> Test to check whats in the array 

#capture input by accessing array from ruby ARGV
operator = ARGV[0]
first_number = ARGV[1].to_i
second_number = ARGV[2].to_i

if operator == 'add'
    result = first_number + second_number
elsif operator == 'multiply'
    result = first_number * second_number
elsif operator == 'divide'
    result = first_number / second_number
elsif operator == 'subtract'
    result = first_number - second_number
else 
    puts "Enter a valid operator"
end

puts result

#need to do this otherwise you will get an error cause of gets looking for a file name
ARGV.clear

puts "Enter the string 'anothaone' "
nextInput = gets.chomp 

if nextInput == 'anothaone' 
    puts "Yolo"
end