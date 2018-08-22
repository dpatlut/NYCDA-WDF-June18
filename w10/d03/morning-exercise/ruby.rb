animals = {}

animal_text = IO.readlines("animals.txt")


animal_text.each do |line|
        key = line.split(":")
        # pp key   #FIRST SPLIT BY COLON 

        #key[0].sym #This will be the key for the object/hash
        #This will be the properties for each animal  so we need to loop through that array
        properties = key[1].split(',')
        propertyhash = {}
        properties.each do |property|
            split_values = property.strip.split('=')
            propertyhash[split_values[0].to_sym] = split_values[1]
        end
        animals[key[0].to_sym] = propertyhash
end

# pp animals

#Other methods

# File.open('animals.txt')

# IO.foreach("animals.txt") {

# }

