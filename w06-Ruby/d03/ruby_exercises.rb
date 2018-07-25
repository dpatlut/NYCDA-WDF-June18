# Create an array literal	var arrayThing = [ 1, 2, "three" ]
x = [1,2,3]
# Read a single item in an array	arrayThing[0]	``
x[0]
# Add an item to an array	arrayThing.push("hi")	``
x.push("hi")
# Delete an item from an array	arrayThing.splice(2, 1)	``

#delete
#delete_at
#delete_if
#slice!
#unshift

# Update an element in an array	arrayThing[0] = "one"	``
x[0] = "David"
x.insert(2, 99) 
x.unshift('a') #adds to the start of the array

# Create an object/hash	var objThing = { name: "Dude", email: "thedude@dude.dude"}	``
my_obj = {
    name: "David",
    last_name: "Patlut"
}

# Read a single item in a hash	objThing.name	``
my_obj[:name]
# Add an item to a hash	objThing.age = 32	``
my_obj[:age] = 90
# Delete an item from a hash	delete objThing.name	``
my_obj.delete(:age)
# Update an element in a hash	objThing.age = 12	``
my_obj[:name] = "Alex"


# Print out all numbers from 1-10	for (i = 1; i < 11; i++) { console.log(i); }	``
i = 1
while i < 11 do 
    puts i
    i+=1
end

for num in 1..10
    puts num
end

1..10.each do |num|
    puts num
end

1.upto(10) do |num| 
    puts num 
end

# Print out all the names in an array of objects	otherArray.forEach(function(el){ console.log(el.name) });	``
arr_of_obj = [
    {name: "david"}, 
    {name: "lilly"}
]

arr_of_obj.each do |el|
    puts el[:name]
end

# 'Merica
# Create a method that takes a string as an argument and adds the phrase “Only in America!” to the end of it

def merica (str)
    puts str + " only in America"
end

merica ("twinkies")


# Create a method called maxValue to find the maximum value in an array of numbers. For instance: [100,10,-1000] should return 100. 
#Do not use Ruby’s built-in .max function.
array = [-100,10,1,200,-1000]
def maxValue(array)
    array.sort.last
    #array[array.length-1]
end

# def maxValue(array)
#     max_value = 0
#     array.each {
#         |elem|
#         if elem > max_value
#             max_value = elem
#             puts max_value
#         end
#     }
# end

maxValue(array)

# Create a method called conversion that takes two arguments - both of them arrays. 
# Inside of the method, combine the arrays using the items from the first array as keys and the second array as values. 

arrayOne = [:toyota, :tesla]
arrayTwo = ["Prius", "Model S"]

def conversion(arg1, arg2)
    [arg1, arg2].transpose.to_h
end

puts conversion(arrayOne, arrayTwo)


# a = [[1,2,3], [4,5,6], [7,8,9]]
# p a.transpose


# def conversion (arg1, arg2)
#   obj = {}
#   arg1.each do |car|
#     obj[car] = nil
#   end
#     obj.each_with_index do |val, index|
#       obj[val] = arg2[index]
#     end
# end

# conversion([:toyota, :tesla], ["Prius", "Model S"])


# def conversion(arr1, arr2)
#     dict = {}
#     arr1.each_with_index do |el, i| 
#       dict[el.to_sym] = arr2[i] 
#     end
#     dict
# end

# conversion(['toyota', 'tesla'], ['Prius', 'Model S'])

# def conversion (arg1, arg2)
#   arg1.zip(arg2).to_h
# end

# conversion(['toyota', 'tesla'], ['Prius', 'Model S'])


#Write a method called transmogrifier that accepts 3 numbers as input arguments and returns the transmogrified result.
def transmogrifier(num1, num2, num3)
	numOneTwoSum = num1 + num2 
	multThree = numOneTwoSum * num3 
	puts multThree
end

#1 + 2 = 3 * 3 = 9
transmogrifier(1, 2, 3)


#Introduce
# Write a method called introduce that accepts two names as strings, and return a string that introduces the two people. 
# For example, introduce(“Harry”, “Sally”) should return the string “Harry, meet Sally.” `

def introduce(name_one, name_two)
    name_one << "meet" << name_two
end


def shout *str
    str.each do |word|
        puts word.upcase
    end
end

shout "offset", "skrrrt", "skrrrt", "skrrrt" , "Hello world"



# Weatherman
# Write a method that takes a weather condition and a temperature. 
# Weather can be “rainy”, “sunny”, “windy”. Temperature can be “hot” or “cold”.

def weatherman(condition, temp)

    if condition == "rainy" && temp == "cold"
        puts "better stay inside!"
    elsif condition == "rainy" && temp == "hot"
        puts "sounds like a gross combination"
    elsif condition == "sunny" && temp == "hot"
        puts "maybe best to go swimming"
    elsif condition == "windy" || temp == "cold"
        puts "bundle up!"
    else condition == "windy" && temp == "hot"
        puts "Tornado warning!"
    end

end


# The meaning of Life 
# Write a method called meaning_of_life which returns the number 42 to you. 
# Use this method to write a Ruby program that:

# Asks the user whether they want to know what the meaning of life is
# If the user enters ‘y’, then the meaning of life is displayed to them using the meaning_of_life method
# Otherwise, the program displays a disappointed message to the user and quits
puts 'Would you like to know the meaning of life?'
userinput = gets.chomp

def meaning_of_life(userinput)
    if userinput == 'y'
        puts '42'
    else
        puts 'WOOOOOOOOOOOOOOW'
    end
end


#string_info
# Define a method called string_info that takes a string as a parameter and returns a hash with the following key-value pairs:
# original: WHATEVER_THE_STRING_IS
# length: WHATEVER_THE_LENGTH_OF_THE_STRING_IS
# snaked: the string in all lower case with spaces replaced by underscores, example (for example “Cool Dude” would look like “cool_dude”)

def string_info(str)
    output = {
      original: str,
      length: str.length,
      snaked: str.downcase.split.join('_')
    }
end


# Fives
# Write a method called mult_five? which accepts one number argument. 
# Returns true if the argument is divisible by five, otherwise return false.

def mult_five(number)
    if number % 5 == 0
        return true
    else 
        return false
    end
end
answerIsQuit = false


#Fives Part Two
# Use this method within a while loop. Within the while loop, ask the user to enter a number or enter the word “quit”. 
# If the user enters a number, use mult_five? to check the number and let the user know if their number was divisible by five 
# If the user entered quit, exit the program.
while answerIsQuit == false do
    puts "Enter a number or type quit"
    answer = gets.chomp
    
    if answer == "quit"
        answerIsQuit = true
    else answer.to_i
        if mult_five(answer)
            puts "Your number is divisible by five"
        else 
            puts "Your number is not divisible by five"
        end
    end
end
