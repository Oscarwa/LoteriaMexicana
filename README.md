Users : Host and player
⦁	Host create a room - COMPLETE
    ⦁	Host generates a 4 character code - COMPLETE
    ⦁	if non existent or game finished, creates a game with that code - COMPLETE
    ⦁	If code already exists and game is old, reuse code. - COMPLETE
    ⦁	host joins that room. - COMPLETE
⦁	Host shares room code - COMPLETE
⦁	Players join room by code
    ⦁	Player enters the code, if exists and active, join the game - COMPLETE
    ⦁	player info will be stored on players table
⦁	Once players (2 or more) joined, host can start the game.
    ⦁	All players can see who is in the room
    ⦁	Host can decide when to start
    ⦁	Once started, nobody else can join
⦁	GAME STARTS
    ⦁	Players will be provided with a board (different)
    ⦁	Host will be able to draw cards from deck, cards drawn will be shared with everyone
⦁	Every player can place tokens, those changes will be shared across the room
    ⦁	Any token placement will be stored on database (and shared to everyone)
⦁	If any player claims LOTERIA, host can check that player board.
    ⦁	There will be a LOTERIA button, if clicked, host can check if user won or not.
    ⦁	if not, player will be disqualified for that round.
    ⦁	If player won, game ends, else, game continue until someone wins.
    •   Players can send preset stickers or gifs when playing (those will appear for everyone in the room)
    •   Winning player can choose a preset dance GIF and send them to everyone in BIG