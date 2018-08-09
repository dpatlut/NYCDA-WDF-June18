class Owner < ActiveRecord::Base
    # has_one :cat
    has_many :cats
end