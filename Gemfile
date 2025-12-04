source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "minima", "~> 2.5"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Windows and JRuby does not include zoneinfo files
platforms :windows, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:windows]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Additional helpful gems
gem "webrick", "~> 1.8" # Required for Jekyll 4.x on Ruby 3.x
gem "csv" # Required for Ruby 3.4+
gem "logger" # Required for Ruby 3.4+
gem "base64" # Required for Ruby 3.4+
