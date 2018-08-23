  
# // Create a function in ruby called divisible? that accepts two arguments number and divider. The function should return whether number is divisible by divider.

def divisible?(number, divider)
    divider == 0 ? false : number % divider == 0 
  end
  
  # divisible?(5,2)
  
  # divisible?(4,2)
  
  # divisible?(-4,2)
  
  # divisible?(-100,-5)
  
  #  divisible?(-100,0)
  
  
  
  
  
  
  
  # // Create a function in ruby called number_divisible_filter that accepts two arguments number and dividers. The function should return an array of booleans determining the if number is divisible by the set of dividers.
  
  
  
  
  
  
  
  
  
  
  
  def number_divisible_filter(number, dividers)
     dividers.map { |divider| 
        divisible?(number, divider)
      }
  end
  
  
  
  
  
  number_divisible_filter(10, [3, 2, -5, 7])
  # number_divisible_filter(40, [1, 0, -5])
  
  # // number_divisible_filter(10, [3, 2, -5, 7]) # [false, true, true, false]
  # // Note: rescue from ZeroDivisionError and place false in the matching array index
  
  # // number_divisible_filter(10, [0, 0, 0, 2]) # [false, false, false, true]
  # // Create a function in ruby called numbers_divisible_filter that accepts two arguments numbers and dividers. The function should return an array of arrays. Each sub-array should house booleans determining whether the number is divisible by the set of dividers.
  # // numbers_divisible_filter([21, 6, 23], [3, 2, -5, 7])
  # // # [[true, false, false, true], [true, true, false, false], [false, false, false, false]]
  
  
  def numbers_divisible_filter_two(numbers, dividers)
    #loop through our number
    numbers.map { |number_to_check| 
        number_divisible_filter(number_to_check, dividers)
    }
  end
  
  numbers_divisible_filter_two([10,5,3], [10, 1, 6, 4])