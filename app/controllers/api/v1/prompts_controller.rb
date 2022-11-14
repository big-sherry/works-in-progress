class Api::V1::PromptsController < ApiController
    def index
        render json: Prompt.all
    end
end