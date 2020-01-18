class ApplicationController < ActionController::API
  def frontend_index_html
    puts 'controller..........................'
    render file: 'public/index.html'
  end
end
