class Staff 
    attr_accessor :name,:photo,:position,:description
    
    def initialize(name, photo, position, description)
        @name = name
        @photo = photo
        @position = position
        @description = description
    end

end