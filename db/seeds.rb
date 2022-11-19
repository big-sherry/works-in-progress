User.delete_all
Prompt.delete_all
Response.delete_all

user_1 = User.create(
    email: 'email1@email.com',
    username: 'user1',
    password: 'password'
)
user_2 = User.create(
    email: 'email2@email.com',
    username: 'user2',
    password: 'password'
)
user_3 = User.create(
    email: 'email3@email.com',
    username: 'user3',
    password: 'password'
)

prompt_1 = Prompt.find_or_create_by(
    title: 'The Haunted House',
    body: 'A child is stuck in a dark room of a haunted house...'
)
prompt_2 = Prompt.find_or_create_by(
    title: 'A Long Day',
    body: 'A couple that own a farm settle in for the night after a long day...'
)
prompt_3 = Prompt.find_or_create_by(
    title: 'Robo-Madness',
    body: 'Advancements in tech have brought about a new form of mania: Robo-Madness...'
)
prompt_4 = Prompt.find_or_create_by(
    title: 'Lovely Time',
    body: 'A pair of best friends realize they have feelings for one another...'
)
prompt_5 = Prompt.find_or_create_by(
    title: 'Look at This',
    body: 'A family that moves into an old house finds something hidden under the floorboards...'
)
prompt_6 = Prompt.find_or_create_by(
    title: 'Me Too',
    body: 'To children talk about their favorite treats...'
)
prompt_7 = Prompt.find_or_create_by(
    title: 'Ghoulish Beast',
    body: 'A monster attacks a small village at the edge of a forest...'
)
prompt_8 = Prompt.find_or_create_by(
    title: 'One Last Time',
    body: 'An elderly man enjoys one of his childhood hobbies...'
)
prompt_9 = Prompt.find_or_create_by(
    title: 'The End',
    body: 'A man finishes telling a story, leaving the audience terrified...'
)

response_1 = Response.find_or_create_by(
    body: "The last time anyone set foot in that house was a few weeks after Old Man Brimble died and his grandkids had to clear out his belongings. I remember them saying they needed to leave quickly because they heard a scary voice coming from a dark corner in the attic.",
    section: "Beginning",
    user: user_1,
    prompt: prompt_1
)
response_2 = Response.find_or_create_by(
    body: "\"Get me the hell out of here!\" Jon was terrified of the darkness in the basement of the old house.",
    section: "Middle",
    user: user_2,
    prompt: prompt_1
)
response_3 = Response.find_or_create_by(
    body: "Mike came back from the auction house with half a million dollars! Everyone was surprised that the old painting had cost so much. Auntie Paulette said, \"So, who gets a cut?\" They all laughed into their night of celebration.",
    section: "End",
    user: user_2,
    prompt: prompt_5
)