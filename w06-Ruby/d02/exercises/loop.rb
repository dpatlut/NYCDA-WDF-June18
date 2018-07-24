# Think of three colors and store the colors, as strings, in an array named colors
# Think of three names and store the names, as strings, in an array named names
# Create a new hash named colors_and_names with two keys, one key is named colors and the other is named names. Set the value of the colors key to the colors array and set the value of names to the names array. What did we just achieve?
# Loop thru each name in the names array and display it on the console.
# Loop thru each color in the colors array and display it on the console.
# Loop thru each name within the colors_and_names hash and display it on the console.
# Loop thru each color within the colors_and_names hash and display it on the console.


colors = ['red', 'pink', 'orange']
names = ['imani', 'jazmine', 'lisa']

colors_and_names = {
    colors: colors,
    names: names
}

# colors.each do |color_at_current_index| 
#     puts color_at_current_index
# end

# names.each_with_index do | value, index | 
#     puts value
#     puts index
# end

# puts colors_and_names

colors_and_names.each do |key, value| 
    value.each do |nested_elem| 
        puts nested_elem
    end
end

# colors_and_names[:names].each do |element|
#     puts element
# end

# colors_and_names[:colors].each do |element|
#     puts element
# end

