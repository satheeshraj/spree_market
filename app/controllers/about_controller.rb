class AboutController < ApplicationController
  def index
    @about_us_text = "Nebulab is an Italian agency working with awesome clients from all over the world with transparency and flexibility. We bring together strategy, design and technology to create successful web solutions that help big and small companies to achieve their goals."

    @our_team_text = "We are a small team passionate about the web and the best technologies it offers. You might meet us at various industry conferences around the world."

    @work_with_us_text = "We’re always looking for passionate and talented people who want to join our team."
  end
end
