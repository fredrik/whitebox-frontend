class SearchController < ApplicationController

def index
	if params["fb"].present?
		cookies[:fb] = params["fb"]
		redirect_to root_path
	end

	if params["screen_name"].present?
		if params["screen_name"] == "0"
			cookies.delete(:twitter)
		else
			cookies[:twitter] = params["screen_name"]
		end
		redirect_to root_path
	end
end

end
