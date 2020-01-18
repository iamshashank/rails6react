class Api::V1::DocumentsController < ApplicationController
  def create
    @document = Document.new(document_params)
    if @document.save
      render json: {document: @document, url: url_for(@document.file)}
    else
      render json: {error: @document.errors.full_messages}, status: 422
    end
  end

  private

  def document_params
    params.require(:document).permit(:file)
  end
end
