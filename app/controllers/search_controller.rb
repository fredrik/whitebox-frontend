class SearchController < ApplicationController

def index
	if params["fb"].present?
		cookies[:fb] = params["fb"]
		redirect_to root_path
	end
end

end
