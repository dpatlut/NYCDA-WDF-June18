require_relative './structure.rb'

n = Line.new( "N", ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'] )
l = Line.new("L", ['8th', '6th', 'Union Square', '3rd', '1st'])
six = Line.new("6", ['8th', '6th', 'Union Square', '3rd', '1st'])
f = Line.new("F", ['8th', '6th', '34th'])

mta = MTA.new
mta.addLine(n)
mta.addLine(six)
mta.addLine(l)


puts "Welcome to the MTA system"
input = ARGV

#We are trying to grab lines
if ARGV[0] == "lines"
    mta.return_lines
end

if ARGV[0] == "stops"
    line = ARGV[1]
    mta.return_stops(line)
end

if ARGV[0] == "calculate"
    startline = ARGV[1] 
    startstop = ARGV[2]
    endline = ARGV[3]
    endstop = ARGV[4]
    mta.calculate(startline, startstop, endline, endstop)
end