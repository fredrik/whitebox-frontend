#!/usr/bin/env rake
# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

# If this is a resque worker
if ENV['QUEUE'].present?
  ROOT_PATH = File.expand_path("..", __FILE__)
  load File.join(ROOT_PATH, 'lib/tasks/resque.rake')
  require 'resque/tasks'
  require 'active_support/dependencies'
end

Whitebox::Application.load_tasks
