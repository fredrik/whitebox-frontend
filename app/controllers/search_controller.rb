class SearchController < ApplicationController

def index
	@tweets = []
	@links = "link 1", "link 2"
	@videos = "video 1", "video 2"
	@photos = "photo 1", "photo 2"

	tweet = JSON.parse('
{
	"id" : 1,
	"username" : "christosconst",
	"name" : "Christos Constantinou",
	"avatar" : "https://si0.twimg.com/profile_images/1571459461/sketch_normal.jpg",
	"content" : "The actual tweet"
}
	')

	@tweets << tweet
	@tweets << tweet
	@tweets << tweet
end

end
