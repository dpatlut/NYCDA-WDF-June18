require 'rainbow'
require './structure.rb'

n = Line.new( "N", ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'] )
l = Line.new("L", ['8th', '6th', 'Union Square', '3rd', '1st'])
six = Line.new("6", ['8th', '6th', 'Union Square', '3rd', '1st'])
f = Line.new("F", ['8th', '6th', '34th'])

mta = SubwaySystem.new
mta.addLine(n)
mta.addLine(six)
mta.addLine(l)
# mta.addLine(f)


puts Rainbow("Welcome to the MTA system").red
input = ARGV

#We are trying to grab lines
if ARGV[0] == "lines"
    mta.return_lines
end

if ARGV[0] == "stops"
    if !ARGV[1].nil?
        line = ARGV[1].upcase
        mta.return_stops(line)
    else 
        puts "Please enter a line"
    end
end

if ARGV[0] == "calculate"
    startline = ARGV[1] 
    startstop = ARGV[2]
    endline = ARGV[3]
    endstop = ARGV[4]
    mta.calculate(startline, startstop, endline, endstop)
end