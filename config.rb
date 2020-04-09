# frozen_string_literal: true

activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.deploy_method   = :ftp
  deploy.host            = 'web0120.zxcs.nl'
  deploy.path            = '/domains/dasmax.nl/public_html'
  deploy.user            = 'u9657p19027'
  deploy.password        = 'u3774NRW'
end

require 'sprockets/es6'
activate :sprockets do |s|
  s.supported_output_extensions << '.es6'
end

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-48026013-5'
end
