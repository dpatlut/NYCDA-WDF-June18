
#First I defined my structure to be based off a lines and MTA class. My lines class will basically store the name of the line and the stops. 
#In my MTA based off those two properties, I will build a hash with the name of the line as the key and a value as an array of strings for the stops.

class MTA
    def initialize
        @lines = {}
    end

    def calculate(lineone,stop,linetwo,stoptwo)

        lineone = lineone.to_sym
        linetwo = linetwo.to_sym

        #Two scenerios
        #No Transfer -> Defined by putting in the same line for both stops
        # puts @lines[lineone].find_index(stop)
        if lineone == linetwo
                sameline = @lines[lineone]
                stop_one = sameline.find_index(stop)
                stop_two = sameline.find_index(stoptwo)
                (stop_one - stop_two).abs
        else
        
        #Transfer -> Defined by putting in a different line for stops. This means I have to go from the first lines specifed stop to union square. Count how many stops were between there and then go to my second line and see how many stops are from union square to the specified stop 
        
        # Find the index of my current stop and the index of where union is 
        given_stop_firstline = @lines[lineone].find_index(stop)
        given_stop_unionsquare = @lines[lineone].find_index("Union Square")

        
        
        #Get the difference and make sure its always positive
        transfer_distance_firstline = (given_stop_firstline - given_stop_unionsquare).abs

        #Find the index of my new stop and the index of where union is 
        given_stop_secondline = @lines[linetwo].find_index(stoptwo)
        given_stop_secondunionsquare = @lines[linetwo].find_index("Union Square")

        transfer_distance_secondline = (given_stop_secondline - given_stop_secondunionsquare).abs
        
        p transfer_distance_firstline + transfer_distance_secondline
        
        end
    end

    def addLine(line)
        name = line.name.to_sym
        stops = line.stops
        @lines[name] = stops
    end

    #returns all the lines from our mta @lines hash
    def return_lines
       puts @lines.keys
    end

    #returns all the lines for a stop
    def return_stops(line)
        puts @lines[line.to_sym]
    end
end
  
  
class Line
    attr_accessor :name,:stops

    def initialize(name,stops)
        @name = name
        @stops = stops
    end

end
  
  
  
