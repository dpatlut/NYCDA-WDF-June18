class Stack

    def initialize
      @store = []
    end
    
    def pop
      @store.pop
    end
    
    def push(element)
      @store.push(element)
    end

    def print_contents
        @store.reverse.each do |element| 
            puts element.value.to_s << " o"
        end
        return
    end
    
    def peek
         if !@store.empty?
            @store.last
         end
    end

    def empty? 
        @store.empty?
    end


    def size
      @store.size
    end
end