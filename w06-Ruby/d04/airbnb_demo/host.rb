class Host
    attr_accessor :name, :listings

    def initialize(name)
        @name = name
        @listings = {}
        #Probably would refactor this into an array
        #@listings = []
    end

    def create_listing(listing)
        @listings[listing.name] = listing
    end 
end

