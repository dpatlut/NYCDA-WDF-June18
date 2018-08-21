# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Post.create(title: 'Yolo', content: 'Some post content')

# Post.create(title: 'Some Other Stuff', content: 'aljksfpoksfafoks')

# Post.create(title: 'Some Other Title', content: 'some other content')


10.times do 
    Post.create(title: Faker::Name.name , content: Faker::Music.band)
end

