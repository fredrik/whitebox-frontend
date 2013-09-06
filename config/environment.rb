# Load the rails application
require File.expand_path('../application', __FILE__)

# Ensure all indexes exist in Elastic Search
Tire.index 'documents' do
  create
end

# Initialize the rails application
Whitebox::Application.initialize!
