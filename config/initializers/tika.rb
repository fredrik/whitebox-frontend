# Load tika config
rails_root = ENV['RAILS_ROOT'] || File.dirname(__FILE__) + '/../..'
rails_env = ENV['RAILS_ENV'] || 'development'

tika_config = YAML.load_file(rails_root + '/config/tika.yml')
Whitebox::Application.config.tika_host = tika_config[rails_env]