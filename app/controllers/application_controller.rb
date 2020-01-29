class ApplicationController < ActionController::API

  rescue_from StandardError do |e|
    render json: {status: false}, status: 400
  end

  def frontend_index_html
    render file: 'public/index.html'
  end
end
