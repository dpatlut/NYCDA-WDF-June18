class SkaterController < ApplicationController
    
    # Route -> /skater GET
    def index 
        @skaters = Skater.all
    end

    #Route -> /skate/:id GET
    def show 
        @single_skater = Skater.find(params[:id])
    end

    # Route -> /skater/new GET
    def new 

    end

    def mycustommethod

    end


end