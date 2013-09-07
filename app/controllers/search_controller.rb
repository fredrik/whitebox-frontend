class SearchController < ApplicationController

def index
	if (not cookies[:fb].present?) && params["fb"].present?
		cookies[:fb] = params["fb"]
		redirect_to root_path
	end
end

end
