require "net/http"

host "localhost:3000"

#

sitemap :sitemaps do

  url "http://#{host}", last_mod: Time.now, change_freq: "daily", priority: 1.0

  url blogs_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url contact_us_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url work_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url services_url, last_mod: Time.now, change_freq: "daily", priority: 1.0
  url about_url, last_mod: Time.now, change_freq: "daily", priority: 1.0


  # Blog.published.each do |blog|
  #
  #   url blog, last_mod: blog.updated_at, priority: 1.0
  #
  # end

end

ping_with "http://#{host}/sitemap.xml" if Rails.env=='production'

