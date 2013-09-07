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
			cmd = "APP_KEY=FmhCchsssW7xswYsgxBEDw "
			cmd += "ACCESS_TOKEN=AAAAAAAAAAAAAAAAAAAAALT%2BTAAAAAAAdHQoiUrhKNCPl2zx8wDhcLSQ88E%3Du6M4NTMx14h6O9Hk8IRy9cxdsh0RAb19LnZ747hM "
			cmd += "/Users/snez/Projects/whitebox-py/whitebox/env/bin/python /Users/snez/Projects/whitebox-py/whitebox/ingest/twitter.py "
			system cmd + params["screen_name"] + " &"
		end
		redirect_to root_path
	end
end

end
