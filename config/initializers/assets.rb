# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile << /\.(?:svg|eot|woff|ttf)\z/
Rails.application.config.assets.precompile += %w( video-js.swf vjs.eot vjs.svg vjs.ttf vjs.woff )
Rails.application.config.assets.precompile += %w( jquery.min.js , application.css.scss , application.js , frontend.scss , front.js , gsdk-bootstrap-wizard.css)
Rails.application.config.assets.precompile += %w( feather.min.js )
# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path
# Precompile additional assets.
# application.js, application.scss, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w(search.js)