class Guest
    attr_accessor :name, :bookings

    def initialize(name)
        @name = name
        @bookings = {}
    end

    def book(host, listing_name, number_nights, dates)
        host.listings[listing_name].reserve_and_pay(@name, number_nights, dates)
        @bookings[listing_name] = dates
    end 
end