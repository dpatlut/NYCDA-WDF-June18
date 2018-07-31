require './structure.rb'


new_game = HanoiGame.new
# puts "
# Welcome to Tower of Hanoi!
# Instructions:
# Enter where you'd like to move from and to
# in the format 'left middle'. Enter 'q' to quit.
# Current Board:
# "

new_game.setup_disks

new_game.move('left', 'middle')
# new_game.print_poles
new_game.move('middle', 'right')
new_game.print_poles
# #from right stack to left stack
# new_game.move('left', 'right')
# # new_game.print_poles
# new_game.move('right', 'left')
# new_game.print_poles