require './host.rb'
require './guest.rb'

class Listings
    attr_accessor :name, :host, :beds, :dates_available, :cancellation, :guest, :reviews, :price

    def initialize(name, host, beds, price) 
        #Added a name property to the listing
        @name = name

        @host = host
        @beds = beds 
        @dates_available = {}
        @cancellation = "strict"

        #Changed this back into an array becuase it made more sense
        @list_of_guests = []

        @reviews = {}
        @price = price
    end

    def reserve_and_pay(guest,num_of_nights,dates_guest_is_staying)

        @list_of_guests.push(guest)
        #This needs to be finished
        
        # dates_guest_is_staying.each do |date_given|

        #   if @dates_available.include?(date_given)
          
        #   else
        #     @dates_avaliable[date_given.to_sym] = false 
        #   end


        # end

        return @price * num_of_nights
    end

    def leave_review(guest, review_text)
        @reviews[guest] = review_text
    end
end



lilly = Host.new('lilly')
# puts lilly

anna = Guest.new('anna')
# puts anna

condo = Listings.new('condo', lilly, 10, 100)
# puts condo
# puts condo.host.name

lilly.create_listing(condo)
# puts lilly.listings

anna.book(lilly,condo.name, 4, ['1/2/2018', '1/3/2018', '1/4/2018', '1/5/2018'])