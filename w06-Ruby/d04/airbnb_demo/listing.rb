class Listing
    attr_accessor :host, :beds, :price, :dates_avaliable, :cancelation, :guests, :reviews, :price

    def initialize(host,beds,price)
        @host = host
        @beds = beds
        @dates_avaliable = {}
        @cancelation = "strict"
        @list_of_guests = {}
        @reviews  = {}
        @price = price
    end

    def reseve_and_pay(guest,num_of_nights,dates_guest_is_staying)

        @list_of_guests[guest] = dates_guest_is_staying

        #block off dates
        #Has yet to take in consideration if the days are already taken
        dates_guest_is_staying.each do |date|
            dates_avaliable[date] = false 
        end



        return @price * num_of_nights
    end

    def leave_review(guest, review_text)
        @reviews[guest] = review_text
    end

end

my_beach_house = Listing.new()