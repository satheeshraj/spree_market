class ServicesController < ApplicationController
  def index
    @ecommerce_text = "We are experts in creating custom online stores.
                       From marketing analysis to design, from development to launch and maintenance we take care of the whole process.
                       Our goal is to satisfy our clients by making their investment profitable."

    @mobile_shopping_text = "With the continuous increase in the number of mobile devices the optimization of e-commerce websites for such new platforms has become an important requirement.
                             That’s why we make our on-line stores accessible from smartphones and tablets."

    @product_migration_text = "If you need to switch to another e-commerce platform without losing all your products, we can help you migrate your database.
                               We support platforms such as Magento, PrestaShop, OpenCart and others."

    @inventory_integration_text = "Do you have a physical store and want to launch your business on the web? This is the right time.
                              If you use an Inventory Management software you are already halfway there. We can integrate your software into our e-commerce solution without changing your workflow."

    @web_design_text = "We design beautiful and functional websites and web applications.
                        From a sketch to a wireframe, from a mockup to an interactive experience, our main goal is to quickly deliver your message to your users."

    @ui_ux_design_text = "We bring projects to life starting from an initial prototype up to a clean and consistent interface.
                         We work hard to create products that our clients and their users enjoy."

    @responsive_design_text = "With the increased usage of mobile devices web content must be accessible anywhere and everywhere.
          That’s why we make web pages that fit all screen sizes."

    @branding_text = "Along with the new design of your website we can help you build or improve your image in order to communicate the value of your brand in its entirety."

    @web_development_text = "We create web applications that just work. From deploying an existing open source platform to building a fully custom application,
                        we provide the solution to our clients' need. By using the right tools and a workflow focused on stability,
                        maintainability and performance, we make sure our work always delivers the value it should."

    @content_management_text = "Do you need to edit your web content? We can provide you full control of your website so you can easily manage text, images, videos and multiple languages.
              We can also build custom features for your needs."

    @maintenance_text = "Have a web application or e-commerce which needs some love? We use cloud provisioning technologies to ensure our clients' applications are always healthy, fast and secure."

    @testing_text = "We describe project features as a list of automated tests called ‘user stories’ which run at each code change.
              By doing this we know new features won’t break what has already been done.
              Additionally, we make sure we fully understand our clients' needs."

    @ember_text = "We provide consultancy for rich client side applications served by server side APIs.
            There are a lot of alternatives right now but we’ve chosen to do it the Ember way.
            We’ve been working with it from its early stages and we really feel this framework will make the difference."

    @ruby_rails_text = "Most of our projects are built with Ruby on Rails.
          We think it’s the best framework around when you need to build powerful web applications that will leave a mark.
          Rails promotes great standards that make it possible for us to concentrate on what it’s valuable for our clients."

    @online_marketing_text = "The Internet is a crowded place, it is hard to gain visibility to promote and sell products or services online.
          We can help you reach your potential customers and bring value to your brand through effective marketing campaigns."

    @ppc_campaigns_text = "We build and manage strategic Pay-Per-Click campaigns on Google Adwords and Facebook Advertising.
            We can promote your business using targeted keywords that help you to reach quickly the right target audience."

    @seo_text = "We can improve the ranking of your online business on search engines by using the right tools and techniques.
            We can optimize your website and build SEO campaigns to bring long-term benefits to your investment."

    @social_media_text = "We can give more visibility to your brand on social networks, blogs and virtual communities through social media marketing campaigns.
          This will help you build an online connection between you and your existing and potential customers."

    @email_marketing_text = "We can help you build a relationship with your customers by creating effective and customized email marketing campaigns.
            By sending regular newsletters you can always keep your customers informed about your business' latest news, such as product updates and new content."

  end
end
