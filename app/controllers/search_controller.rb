class SearchController < ApplicationController

def index
	@tweets = []
	@links = "link 1", "link 2"
	@videos = "video 1", "video 2"
	@photos = "photo 1", "photo 2"

	file = File.open("tweet.json", "rb")
	tweet = JSON.parse(file.read)

	@tweets << tweet
	@tweets << tweet
	@tweets << tweet
end

end
