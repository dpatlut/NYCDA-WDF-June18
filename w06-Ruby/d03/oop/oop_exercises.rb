# Create an Animal class that stores information on an animal’s height, species and name. The name, species and height are readable outside of the class definition. Only name is changeable outside of the class definition.


# Add two instance methods called walk and run. The walk method returns "I am walking very slowly" and the run method returns "I am running very quickly".

class Animal 
    # attr_reader :height, :species, :name
    # attr_writer :name

    attr_accessor :name
    attr_reader :height, :species

    def initialize(height, species, name)
        @height = height
        @species = species
        @name = name  
    end

    def run 
        puts "I am running very quickly"
    end

    def walk 
        puts "I am walking very slow"
    end
end





# Create a Calculator class with 4 class methods: add, subtract, multiply and divide. Each method accepts two parameters and returns the result of the operation.

class Calculator

    def self.add(num_one, num_two)
        num_one + num_two
    end

    def self.multiply(num_one, num_two)
        num_one * num_two
    end

    def self.divide(num_one, num_two)
        num_one / num_two
    end

    def self.subtract(num_one, num_two)
        num_one - num_two
    end
end

Calculator.add(1,2)




# Create Giraffe and Lizard classes both of which inherit from Animal. Make sure each giraffe and lizard instance have their species set accordingly.

class Giraffe < Animal

end

class Lizard < Animal

end

jeff = Giraffe.new(90, 'kordofan', 'jeff')
jeff.walk


# Create a Student and SeiStudent class. Each Student should have the ability to store their name, gpa and course. Each SeiStudent stores the same information as Student, their course is permanently set to "sei" but also stores a list of topics: "design", "frontend programming" and "backend programming". Both should allow for retrieval of all information but none of it can be changed once initialized.

class Student 
    def initialize(name,gpa,course)
        @name = name 
        @gpa = gpa 
        @course = course
    end

end

class SeiStudent < Student
    def initialize(name,gpa)
        super(name, gpa, 'sei')
        @hours_slept = 5
        @topics = ['design' , 'front-end', 'back-end']
    end

    def return_info 
        puts "Name: #{@name} , GPA: #{@gpa} , COURSE: #{@course}"
    end

    def return_time_slept
        puts "I slept for #{@hours_slept} hours"
    end
end

yung = SeiStudent.new('yung', 100)

# Add a method to both that returns a message displaying their name, gpa and course in words.
# Allow for an SeiStudent to store their hours_slept and then create behavior that displays how many minutes they have slept based on their hours.
