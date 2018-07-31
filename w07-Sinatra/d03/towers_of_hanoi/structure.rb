require './stack.rb'
require './disk.rb'

#This version is hardcoded with 3 disks to start
class HanoiGame
    #Create a initalize method that will create my new stacks
    attr_accessor :stack_left, :stack_middle, :stack_right

    # DONT SPELL INITIALIZE WRONG YOU DUMMY - YOU WILL HATE YOUR LIFE
    def initialize
        @gameon = true
        @stack_left = Stack.new
        @stack_middle = Stack.new 
        @stack_right = Stack.new
    end

    def setup_disks
        for disk_value in 3.downto(1)
            new_disk = Disk.new(disk_value)
            @stack_left.push(new_disk)
        end

        @poles = {
            left: @stack_left, 
            middle: @stack_middle,
            right: @stack_right
        }

    end

    def print_poles
        puts "Left Stack:"
        print @stack_left.print_contents
        puts "Middle Stack:"
        print @stack_middle.print_contents
        puts "Right Stack:"
        print @stack_right.print_contents
    end

    def move(from,to)
        from_pole = @poles[from.to_sym]
        to_pole = @poles[to.to_sym]
        
        to_pole.push(from_pole.pop)
        #Logic to compare the code
    end
end





 # if to_pole.empty? 
        #     to_pole.push(from_pole.pop)
        # else 
        #     if from_pole.peek.value > to_pole.peek.value
        #         puts 'No bueno'
        #     else
        #         to_pole.push(from_pole.pop)
        #     end
        # end