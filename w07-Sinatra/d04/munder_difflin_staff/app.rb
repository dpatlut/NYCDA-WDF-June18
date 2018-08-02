require 'sinatra'
require './staff.rb'

dwight = Staff.new('dwight', 'https://uproxx.files.wordpress.com/2015/02/dwight.jpeg?quality=95&w=600', 'Assistant to the regional manager', 'A holligan')

jim = Staff.new('jim', 'http://cf.mp-cdn.net/1e/78/269cf2ae3537335aa0093600b9f3-the-office-was-pam-or-karen-the-better-significant-other-for-jim.jpg', 'sales person', 'Joker')


my_staff = {
    jim: jim,
    dwight: dwight
}


get '/' do 
    'hello world'
end

get '/staff/:name' do 
    current_staff_member = params[:name]
    @staff_member_rendered = my_staff[current_staff_member.to_sym]
    puts "HELLO WORLD"
    puts @staff_member_rendered
    puts "HELLO WORLD"
    erb :staff
end
