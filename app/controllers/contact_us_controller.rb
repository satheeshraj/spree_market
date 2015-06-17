class ContactUsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  def contact_us

  end

  def submit
   name = params['client_name']
   email = params['client_email']
   message = params['client_message']
    @post = Contact.build(:name=>name,:email=>email,:message=>message)
    @post.save!

  end

end
